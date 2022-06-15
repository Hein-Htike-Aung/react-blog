import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className='register'>
			<span className='registerTitle'>Register</span>
			<form action='' className='registerForm'>
				<label>Username</label>
				<input
					type='text'
					className='registerInput'
					placeholder='Enter your username...'
				/>
				<label>Email</label>
				<input
					type='text'
					className='registerInput'
					placeholder='Enter your email...'
				/>
				<label>Password</label>
				<input
					className='registerInput'
					type='password'
					placeholder='Enter your password...'
				/>
				<button className='registerButton'>register</button>
			</form>
			<button className='registerLoginButton'>
				<Link to={'/login'} className='link'>
					login
				</Link>
			</button>
		</div>
	);
};

export default Register;
