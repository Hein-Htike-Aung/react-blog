import React from 'react';
import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Setting = () => {
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsTitleUpdate'>Update Your Account</span>
					<span className='settingsTitleDelete'>Delete Account</span>
				</div>
				<div className='settingsForm'>
					<label>Profile Pacture</label>
					<div className='settingsPP'>
						<img
							src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
						/>
						<label htmlFor='fileInput'>
							<i className='settingsPPIcon fa-solid fa-user-astronaut'></i>
						</label>
						<input type='file' hidden id='fileInput' />
					</div>
					<label>Username</label>
					<input type='text' placeholder='Safak' />
					<label>Email</label>
					<input type='email' placeholder='safak@gmail.com' />
					<label>Password</label>
					<input type='password' />
					<button className='settingsSubmitButton'>Update</button>
				</div>
			</div>
			<Sidebar />
		</div>
	);
};

export default Setting;
