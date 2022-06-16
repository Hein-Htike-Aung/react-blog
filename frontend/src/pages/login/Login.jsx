import React, { useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import { API_URL } from '../../api/apiurl';

const Login = () => {
	const usernameRef = useRef();
	const passwordRef = useRef();

	const { dispatch, isFetching } = useContext(Context);

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });

		try {
			const username = usernameRef.current.value;
			const password = passwordRef.current.value;
			const res = await axios.post(`${API_URL}/auth/login`, {
				username,
				password,
			});

			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE', payload: error });
		}
	};

	return (
		<div className='login'>
			<span className='loginTitle'>Login</span>
			<form onSubmit={handleLogin} className='loginForm'>
				<label>Username</label>
				<input
					type='text'
					className='loginInput'
					placeholder='Enter your username...'
					ref={usernameRef}
				/>
				<label>Password</label>
				<input
					className='loginInput'
					type='password'
					placeholder='Enter your password...'
					ref={passwordRef}
				/>
				<button type='submit' className='loginButton' disabled={isFetching}>
					Login
				</button>
			</form>
			<button className='loginRegisterButton'>
				<Link className='link' to={'/register'}>
					Register
				</Link>
			</button>
		</div>
	);
};

export default Login;
