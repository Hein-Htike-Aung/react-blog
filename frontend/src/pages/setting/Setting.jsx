import axios from 'axios';
import { useContext, useState } from 'react';
import { API_IMAGE_URL, API_URL } from '../../api/apiurl';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './setting.css';

const Setting = () => {
	const { user, dispatch } = useContext(Context);
	const [username, setUsername] = useState(user.username);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState();
	const [file, setFile] = useState(null);
	const [success, setSuccess] = useState(false);

	const PF = API_IMAGE_URL;

	const handleUpdate = async (e) => {
		e.preventDefault();

		dispatch({ type: 'UPDATEUSER_START' });

		const updateUser = {
			userId: user._id,
			username,
			email,
			password,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;

			data.append('name', filename);
			data.append('file', file);

			updateUser.profilePic = filename;

			try {
				await axios.post(`${API_URL}/upload`, data);
			} catch (error) {
				console.log(error);
			}
		}

		try {
			const res = await axios.patch(`${API_URL}/user/${user._id}`, updateUser);

			setSuccess(true);
			dispatch({ type: 'UPDATEUSER_SUCCESS', payload: res.data });
		} catch (error) {
			console.log(error);
			dispatch({ type: 'UPDATEUSER_FAILURE' });
		}
	};

	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsTitleUpdate'>Update Your Account</span>
					<span className='settingsTitleDelete'>Delete Account</span>
				</div>
				<form className='settingsForm' onSubmit={handleUpdate}>
					<label>Profile Picture</label>
					<div className='settingsPP'>
						<img
							src={
								file ? URL.createObjectURL(file) : PF + '/' + user.profilePic
							}
							alt=''
						/>

						<label htmlFor='fileInput'>
							<i className='settingsPPIcon fa-solid fa-user-astronaut'></i>
						</label>
						<input
							type='file'
							hidden
							id='fileInput'
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
					<label>Username</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type='text'
					/>
					<label>Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
					/>
					<label>Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type='password'
					/>
					<button type='submit' className='settingsSubmit'>
						Update
					</button>
					{success && (
						<span
							style={{ color: 'green', textAlign: 'center', margin: '20px' }}
						>
							Profile has been updated...
						</span>
					)}
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Setting;
