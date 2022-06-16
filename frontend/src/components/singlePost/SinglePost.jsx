import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_IMAGE_URL, API_URL } from '../../api/apiurl';
import './singlePost.css';
import { Context } from '../../context/Context';

const SinglePost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	const PF = API_IMAGE_URL;
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [updateMode, setUpdateMode] = useState(false);

	const { user: currentUser } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchSinglePost = async () => {
			const data = await getSinglePost();
			setPost(data);
			setTitle(data.title);
			setDesc(data.desc);
		};

		fetchSinglePost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [postId]);

	const getSinglePost = async () => {
		const res = await axios.get(`${API_URL}/post/${postId}`);
		return res.data;
	};

	const handlePostDelete = async () => {
		try {
			await axios.delete(`${API_URL}/post/${postId}`, {
				data: {
					username: currentUser.username,
				},
			});
			navigate('/', { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async () => {
		try {
			const res = await axios.patch(`${API_URL}/post/${post._id}`, {
				title,
				desc,
				username: currentUser.username,
			});
			res.data && setUpdateMode(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img className='singlePostImg' src={PF + '/' + post.photo} alt='' />
				)}
				{updateMode ? (
					<input
						className='singlePostTitleInput'
						type='text'
						value={title}
						autoFocus
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<h1 className='singlePostTitle'>
						{title}
						{post.username === currentUser?.username && (
							<div className='singlePostEdit'>
								<i
									onClick={() => setUpdateMode(true)}
									className='singlePostIcon fa-solid fa-pen-to-square'
								></i>
								<i
									onClick={handlePostDelete}
									className='singlePostIcon fa-solid fa-trash-can'
								></i>
							</div>
						)}
					</h1>
				)}
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author:
						<Link className='link' to={`/?username=${post.username}`}>
							<b>{post.username}</b>
						</Link>
					</span>
					<span className='singlePostDate'>
						{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				{updateMode ? (
					<textarea
						className='singlePostDescInput'
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<p className='singlePostDesc'>{desc}</p>
				)}
				{updateMode && (
					<button onClick={handleUpdate} className='singlePostButton'>
						Update
					</button>
				)}
			</div>
		</div>
	);
};

export default SinglePost;
