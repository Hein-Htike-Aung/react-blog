import { Request, Response } from 'express';
import { Express } from 'express';
import { storage } from '../utils/storage';
import multer from 'multer';

const upload = multer({ storage });

export const fileUploadRoute = (app: Express) => {
	app.post(
		'/api/upload',
		upload.single('file'),
		(req: Request, res: Response) => {
			try {
				return res.status(200).json('File uploaded successfully');
			} catch (error) {
				console.log(error);
			}
		},
	);

	app.get('/api/images/:filename', (req, res) => {
		const fileName = req.params['filename'];
		return res.sendFile(fileName, { root: 'public/images' });
	});
};
