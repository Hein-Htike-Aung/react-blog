import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../api/apiurl';
import './sidebar.css';

const Sidebar = () => {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const fetchAllCategories = async () => {
			setCats(await getAllCategories());
		};

		fetchAllCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getAllCategories = async () => {
		const res = await axios.get(`${API_URL}/category`);
		return res.data;
	};

	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<div className='sidebarTitle'>ABOUT ME</div>
				<img
					src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
					alt=''
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					illum modi praesentium repellendus ipsum. Excepturi eveniet quam
					ratione molestias. Obcaecati amet repudiandae possimus rem sed
					expedita, ipsam architecto aut quo?
				</p>
				<div className='sidbrItem'>
					<span>
						<div className='sidebarTitle'>CATEGORIES</div>
						<ul className='sidebarList'>
							{cats?.map((cat) => (
								<Link
									className='link'
									key={cat._id}
									to={`/?categoryName=${cat.name}`}
								>
									<li className='sidebarListItem'>{cat.name}</li>
								</Link>
							))}
						</ul>
					</span>
				</div>
				<div className='sidebarItem'>
					<span className='sidebarTitle'>FOLLOW US</span>
					<div className='sidebarSocial'>
						<i className='sidebarIcon fa-brands fa-facebook-f'></i>
						<i className='sidebarIcon fa-brands fa-twitter'></i>
						<i className='sidebarIcon fa-brands fa-pinterest'></i>
						<i className='sidebarIcon fa-brands fa-instagram-square'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
