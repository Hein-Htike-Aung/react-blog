import Post, { PostDocument } from './../models/post.model';
import { DocumentDefinition, QueryOptions, UpdateQuery } from 'mongoose';

export const createPost = (input: DocumentDefinition<PostDocument>) => {
	return Post.create(input);
};

export const findPostById = (id: string) => {
	return Post.findById(id);
};

export const updatePost = async (
	id: string,
	update: UpdateQuery<PostDocument>,
	options: QueryOptions,
) => {
	return await Post.findByIdAndUpdate(id, { $set: update }, options);
};

export const deletePost = async (_id: string) => {
	return await Post.deleteOne({ _id });
};

export const findPosts = async (option: QueryOptions) => {
	return await Post.find(option);
};
