import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
	const user = false;

	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fa-brands fa-facebook-f'></i>
				<i className='topIcon fa-brands fa-twitter'></i>
				<i className='topIcon fa-brands fa-pinterest'></i>
				<i className='topIcon fa-brands fa-instagram-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link className='link' to={'/'}>
							HOME
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to={'/'}>
							ABOUT
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to={'/'}>
							CONTACT
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to={user ? '/write' : 'register'}>
							WRITE
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to={'/'}>
							{user && 'LOGOUT'}
						</Link>
					</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					<img
						className='topImg'
						src='https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
						alt=''
					/>
				) : (
					<ul className='topList'>
						<li className='topListItem'>
							<Link className='link' to={'/login'}>
								LOGIN
							</Link>
						</li>
						<li className='topListItem'>
							<Link className='link' to={'/register'}>
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
};

export default TopBar;
