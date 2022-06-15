import { string } from 'yup';
import User, { UserDocument } from './../models/user.mode';
import { DocumentDefinition, QueryOptions, UpdateQuery } from 'mongoose';
import { omit, get } from 'lodash';
import Post from '../../post/models/post.model';

export const registerUser = async (input: DocumentDefinition<UserDocument>) => {
	try {
		return await User.create(input);
	} catch (error) {
		throw new Error(error as any);
	}
};

export const findUserById = (id: string) => {
	return User.findById(id);
};

export const validateuser = async ({
	username,
	password,
}: {
	username: UserDocument['username'];
	password: string;
}) => {
	const user = await User.findOne({ username });

	if (!user) return false;

	const isValid = await user.comparePassword(password);

	if (!isValid) return false;

	return omit(user.toJSON(), 'password');
};

export const updateUser = async (
	id: string,
	update: UpdateQuery<UserDocument>,
	options: QueryOptions,
) => {
	try {
		return User.findByIdAndUpdate(id, { $set: update }, options);
	} catch (error) {
		throw new Error(error as any);
	}
};

export const deleteUser = async (user: UserDocument) => {
	// Delete related User's Posts
	await Post.deleteMany({ username: user.username });
	// Delete User
	await User.deleteOne({_id: user._id});
};

export const findUserByUsername = async (username: string) => {
	return await User.findOne({ username });
};