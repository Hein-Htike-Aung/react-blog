import React, { useContext } from 'react';
import './topbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import { API_IMAGE_URL } from '../../api/apiurl';

const TopBar = () => {
	const { user, dispatch } = useContext(Context);

	const navigate = useNavigate();

	const PF = API_IMAGE_URL;

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		navigate('/login', { replace: true });
	};

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
					<li onClick={handleLogout} className='topListItem'>
						{user && 'LOGOUT'}
					</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					<Link to={'/setting'}>
						{user.profilePic && (
							<img className='topImg' src={PF + '/' + user.profilePic} alt='' />
						)}
					</Link>
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
