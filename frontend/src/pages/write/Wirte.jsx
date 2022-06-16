import axios from 'axios';
import React, { useContext, useState } from 'react';
import { API_URL } from '../../api/apiurl';
import './write.css';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Wirte = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState(null);
	const navigate = useNavigate();

	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPost = {
			title,
			desc,
			username: user.username,
			photo: null,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;

			data.append('name', filename);
			data.append('file', file);

			newPost.photo = filename;

			try {
				await axios.post(`${API_URL}/upload`, data);
			} catch (error) {
				console.log(error);
			}
		}

		try {
			const res = await axios.post(`${API_URL}/post`, newPost);

			res.data && navigate(`/post/${res.data._id}`, { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='write'>
			{file && (
				<img className='writeImg' src={URL.createObjectURL(file)} alt='' />
			)}

			<form className='writeForm' onSubmit={handleSubmit}>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fas fa-plus'></i>
					</label>
					<input
						id='fileInput'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<input
						className='writeInput'
						placeholder='Title'
						type='text'
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='writeFormGroup'>
					<textarea
						className='writeInput writeText'
						placeholder='Tell your story...'
						type='text'
						autoFocus={true}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>
				<button className='writeSubmit' type='submit'>
					Publish
				</button>
			</form>
		</div>
	);
};

export default Wirte;
