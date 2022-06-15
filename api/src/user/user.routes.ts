import {
	registerUserHandler,
	loginUserHandler,
	updateUserHandler,
	deleteUserHandler,
	getUserHandler
} from './controllers/user.controller';
import { deleteUserSchema, loginUserSchema, registerUserSchema, updateUserSchema } from './schema/user.schema';
import { Express } from 'express';
import validateRequest from '../middleware/validateRequest';

const AUTH_URL = '/api/auth';
const USER_URL = '/api/user';

export const authRoute = (app: Express) => {
	/* Register */
	app.post(
		`${AUTH_URL}/register`,
		validateRequest(registerUserSchema),
		registerUserHandler,
	);

	/* Login */
	app.post(
		`${AUTH_URL}/login`,
		validateRequest(loginUserSchema),
		loginUserHandler,
	);
};

export const userRoute = (app: Express) => {
	/* Update User */
	app.patch(`${USER_URL}/:userId`, validateRequest(updateUserSchema), updateUserHandler);

	/* Delete User */
	app.delete(`${USER_URL}/:userId`, validateRequest(deleteUserSchema), deleteUserHandler);

	/* Get User By Query */
	app.get(`${USER_URL}/by-query`, getUserHandler);

};

