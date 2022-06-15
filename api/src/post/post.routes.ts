import { Express } from 'express';
import validateRequest from '../middleware/validateRequest';
import {
	createPostHandler,
	deletePostHandler,
	getPostHandler,
	getPostsHandler,
	updatePostHandler,
} from './controllers/post.controller';
import {
	createPostSchema,
	deletePostSchema,
	updatePostSchema,
} from './schema/post.schema';

const POST_URL = '/api/post';

export const postRoute = (app: Express) => {
	/* Create Post */
	app.post(`${POST_URL}`, validateRequest(createPostSchema), createPostHandler);

	/* Update Post */
	app.patch(
		`${POST_URL}/:postId`,
		validateRequest(updatePostSchema),
		updatePostHandler,
	);

	/* Delete Post */
	app.delete(
		`${POST_URL}/:postId`,
		validateRequest(deletePostSchema),
		deletePostHandler,
	);

	/* get post by id */
	app.get(`${POST_URL}/:postId`, getPostHandler);

	/* get Post by query */
	app.get(`${POST_URL}/list/by-query`, getPostsHandler);
};
