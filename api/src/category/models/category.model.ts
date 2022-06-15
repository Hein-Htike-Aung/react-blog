import mongoose from 'mongoose';

export interface CategoryDocument extends mongoose.Document {
	name: string;
}

const CategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true },
);

const Category = mongoose.model<CategoryDocument>('Category', CategorySchema);
export default Category;
