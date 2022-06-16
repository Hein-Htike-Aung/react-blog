import {
	deletePost,
	findPostById,
	findPosts,
	updatePost,
} from './../services/post.service';
import { get, omit } from 'lodash';
import { Request, Response } from 'express';
import log from '../../log';
import { createPost } from '../services/post.service';

export const createPostHandler = async (req: Request, res: Response) => {
	try {
		const post = await createPost(req.body);

		return res.send(post);
	} catch (e: any) {
		log.error(e);
		return res.status(409).send({ error: e.message });
	}
};

export const updatePostHandler = async (req: Request, res: Response) => {
	const postId = get(req, 'params.postId');
	const update = req.body;

	const { username } = update;

	try {
		const post = await findPostById(postId);

		if (!post) return res.status(404).send({ error: 'Post not found' });

		if (username === post.username) {
			const updatedPost = await updatePost(postId, update, { new: true });

			return res.send(updatedPost);
		} else {
			return res
				.status(403)
				.send({ error: 'You can only update your own post' });
		}
	} catch (e: any) {
		log.error(e);
		return res.status(409).send({ error: e.message });
	}
};

export const deletePostHandler = async (req: Request, res: Response) => {
	const postId = get(req, 'params.postId');
	const { username } = req.body;

	try {
		const post = await findPostById(postId);

		if (!post) return res.status(404).send({ error: 'Post not found' });

		await deletePost(post._id);

		return res.status(203).send({ message: 'Successfully Deleted' });
	} catch (e: any) {
		log.error(e);
		return res.status(409).send({ error: e.message });
	}
};

export const getPostHandler = async (req: Request, res: Response) => {
	const postId = get(req, 'params.postId');
	return res.json(await findPostById(postId));
};

export const getPostsHandler = async (req: Request, res: Response) => {
	const username = get(req, 'query.username');
	const categoryName = get(req, 'query.categoryName');

	let query: Record<string, any> = {};

	if (username) {
		query.username = username;
	}
	if (categoryName) {
		query.categories = { $in: [{ name: categoryName }] };
	}

	return res.json(await findPosts(query));
};
