import { createCategorySchema } from './schema/category.schema';
import { Express } from 'express';
import validateRequest from '../middleware/validateRequest';
import { createCategoryHandler, getCategoryHandler } from './controllers/category.controller';

export const CATEGORY_URL = '/api/category';

export const categoryRoute = (app: Express) => {
    /* Create Cateogry */
    app.post(`${CATEGORY_URL}`, validateRequest(createCategorySchema), createCategoryHandler);

    /* Get Category By id */
    app.get(`${CATEGORY_URL}/:categoryId`, getCategoryHandler)
}