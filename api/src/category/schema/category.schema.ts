import { object, string, array, ref, boolean, mixed } from 'yup';

export const payload = {
	body: object({
		name: string().required('Name is required'),
	}),
};

export const params = {
	params: object({
		caegoryId: string().required(),
	}),
};

export const createCategorySchema = object({ ...payload });
