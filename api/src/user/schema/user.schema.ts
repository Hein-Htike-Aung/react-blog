import { object, string, array, ref, boolean, mixed } from 'yup';

export const registerUserSchema = object({
	body: object({
		username: string().required('Name is required'),
		email: string()
			.email('Must be a valid email')
			.required('Email is required'),
		password: string()
			.required('Password is required')
			.min(6, 'Password is too short - should be 6 chars minimum.')
			.matches(/^[a-zA-Z0-9_.-]*$/, 'Password can only contain Latin letters.'),
		profilePic: string(),
	}),
});

export const loginUserSchema = object({
	body: object({
		username: string().required('Username is required'),
		password: string()
			.required('Password is required')
			.min(6, 'Password is too short - should be 6 chars minimum.')
			.matches(/^[a-zA-Z0-9_.-]*$/, 'Password can only contain Latin letters.'),
	}),
});

export const params = {
	params: object({
		userId: string().required('UserId is required'),
	}),
};

export const updateUserSchema = object({
	...params,
	body: object({
		userId: string(),
		username: string(),
		email: string().email('Must be a valid email'),
		password: string()
			.required('Password is required')
			.min(6, 'Password is too short - should be 6 chars minimum.')
			.matches(/^[a-zA-Z0-9_.-]*$/, 'Password can only contain Latin letters.'),
		profilePic: string(),
	}),
});

export const deleteUserSchema = object({
	...params,
	body: object({
		userId: string().required(),
	}),
});
