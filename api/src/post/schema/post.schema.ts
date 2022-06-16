import { object, string, array, ref, boolean, mixed } from 'yup';

export const payload = {
	body: object({
		title: string().required('Name is required'),
		desc: string().required('Name is required'),
		photo: string().required('Name is required'),
		username: string().required('Name is required'),
		categories: array().of(
			object().shape({
				name: string().max(255).required().label('name'),
			}),
		),
		// .min(1),
	}),
};

export const params = {
	params: object({
		postId: string().required(),
	}),
};

export const createPostSchema = object({ ...payload });

export const updatePostSchema = object({
	...params,
	body: object({
		username: string().required('Name is required'),
		title: string(),
		desc: string(),
		photo: string(),
		categories: array().of(
			object().shape({
				name: string().max(255).required().label('name'),
			}),
		),
	}),
});

export const deletePostSchema = object({
	...params,
	body: object({
		username: string().required('Current User name is required'),
	}),
});
