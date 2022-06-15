import log from '../../log';
import { Request, Response } from 'express';
import { get, omit } from 'lodash';
import { createCategory, findCategoryById } from '../services/category.service';

export const createCategoryHandler = async (req: Request, res: Response) => {
	try {
		const category = await createCategory(req.body);

		return res.send(category);
	} catch (e: any) {
		log.error(e);
		return res.status(409).send({ error: e.message });
	}
};

export const getCategoryHandler = async (req: Request, res: Response) => {
	const categoryId = get(req, 'params.categoryId');
	const category = await findCategoryById(categoryId);

	if (!category) return res.status(404).send({ error: 'Category not found' });

    return res.send(category);
};
