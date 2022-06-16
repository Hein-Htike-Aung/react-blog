import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../api/apiurl';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			if (username && email && password) {
				const res = await axios.post(`${API_URL}/auth/register`, {
					username,
					email,
					password,
				});
				res.data && navigate('/login', { replace: true });
			}
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form className='registerForm' onSubmit={handleRegister}>
				<label>Username</label>
				<input
					type='text'
					className='registerInput'
					placeholder='Enter your username...'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					type='text'
					className='registerInput'
					placeholder='Enter your email...'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className='registerInput'
					type='password'
					placeholder='Enter your password...'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit' className='registerButton'>
					register
				</button>
			</form>
			<button className='registerLoginButton'>
				<Link to={'/login'} className='link'>
					login
				</Link>
			</button>
			{error && (
				<span style={{ color: 'red', marginTop: '10px' }}>
					Someting went wrong !
				</span>
			)}
		</div>
	);
};

export default Register;
