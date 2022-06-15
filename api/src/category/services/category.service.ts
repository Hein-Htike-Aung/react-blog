import { DocumentDefinition } from 'mongoose';
import Category, { CategoryDocument } from '../models/category.model';

export const createCategory = async (input: DocumentDefinition<CategoryDocument>) => {
	try {
		return await Category.create(input);
	} catch (error) {
		throw new Error(error as any);
	}
};

export const findCategoryById = (id: string) => {
    return Category.findById(id)
}