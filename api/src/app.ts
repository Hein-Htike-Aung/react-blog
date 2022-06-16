import { categoryRoute } from './category/category.routes';
import { postRoute } from './post/post.routes';
import { userRoute, authRoute } from './user/user.routes';
import config from 'config';
import express from 'express';
import bodyParser from 'body-parser';
import log from './log';
import connect from './db/conntect';
import { fileUploadRoute } from './core/file-upload.routes';
const cors = require('cors');

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

/* Middleware */
app.use(express());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.use(bodyParser.json());
app.use(cors());


app.listen(port, host, () => {
	log.info(`server listening at http://${host}:${port}`);

	connect();

	authRoute(app);
	userRoute(app);
	postRoute(app);
	categoryRoute(app);
	fileUploadRoute(app);
});
