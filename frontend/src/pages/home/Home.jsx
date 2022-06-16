import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../api/apiurl';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchAllPosts = async () => {
			setPosts(await getAllPosts());
		};

		fetchAllPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	const getAllPosts = async () => {
		const res = await axios.get(`${API_URL}/post/list/by-query` + search);

		return res.data;
	};

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
