import {
	deleteUser,
	findUserById,
	findUserByUsername,
	updateUser,
} from './../services/user.service';
import { Request, Response } from 'express';
import log from '../../log';
import { registerUser, validateuser } from '../services/user.service';
import { get, omit } from 'lodash';
import bcrypt from 'bcrypt';
import config from 'config';

export const registerUserHandler = async (req: Request, res: Response) => {
	try {
		const user = await registerUser(req.body);

		return res.status(200).json(omit(user.toJSON(), 'password'));
	} catch (e: any) {
		log.error(e);
		return res.status(409).send({ error: e.message });
	}
};

export const loginUserHandler = async (req: Request, res: Response) => {
	const user = await validateuser(req.body);

	if (!user)
		return res.status(401).send({ error: 'Invalid Username or password' });

	return res.status(200).send(user);
};

export const updateUserHandler = async (req: Request, res: Response) => {
	const userIdFromParam = get(req, 'params.userId');
	const userIdFromBody = get(req, 'body.userId');
	const update = req.body;

	if (userIdFromParam == userIdFromBody) {
		const user = await findUserById(userIdFromParam);

		if (!user) return res.status(404).send({ error: 'User not found' });

		if (update.password) {
			const salt = await bcrypt.genSalt(config.get('saltWorkFactor'));

			const hash = await bcrypt.hashSync(update.password, salt);

			update.password = hash;
		}

		const updatedUser = await updateUser(userIdFromParam, update, {
			new: true,
		});

		return res.send(updatedUser);
	} else {
		return res.status(403).send({ error: 'You can only update your data' });
	}
};

export const deleteUserHandler = async (req: Request, res: Response) => {
	const userIdFromParam = get(req, 'params.userId');
	const userIdFromBody = get(req, 'body.userId');

	if (userIdFromParam == userIdFromBody) {
		const user = await findUserById(userIdFromParam);

		if (!user) return res.status(404).send({ error: 'User not found' });

		await deleteUser(user);

		return res
			.status(200)
			.send({ message: 'Account has been deleted successfully' });
	} else {
		return res.status(403).send({ error: 'You can only delete your data' });
	}
};

export const getUserHandler = async (req: Request, res: Response) => {
	const userId = get(req, 'query.userId');
	const username = get(req, 'query.username');

	const user = userId
		? await findUserById(userId)
		: await findUserByUsername(username);

	if (!user) return res.status(404).send({ error: 'User not found' });

	return res.send(omit(user, 'password', 'updatedAt'));
};
