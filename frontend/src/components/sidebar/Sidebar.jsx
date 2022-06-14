import React from 'react';
import './sidebar.css';

const Sidebar = () => {
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
							<li className='sidebarListItem'>Life</li>
							<li className='sidebarListItem'>Music</li>
							<li className='sidebarListItem'>Style</li>
							<li className='sidebarListItem'>Sport</li>
							<li className='sidebarListItem'>Tech</li>
							<li className='sidebarListItem'>Cinema</li>
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
