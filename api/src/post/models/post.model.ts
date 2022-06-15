import mongoose from 'mongoose';

export interface PostDocument extends mongoose.Document {
	title: string;
	desc: string;
	photo: string;
	username: string;
	categories: string[];
}

const PostScheme = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		desc: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		categories: { // Category Name
			type: Array,
		},
	},
	{ timestamps: true },
);

const Post = mongoose.model<PostDocument>('Post', PostScheme);
export default Post;
