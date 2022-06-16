export const LoginStart = () => ({
	type: 'LOGIN_START',
});

export const LoginSuccess = (user) => ({
	type: 'LOGIN_SUCCESS',
	payload: user,
});

export const LoginFailure = () => ({
	type: 'LOGIN_FAILURE',
});

export const Logout = () => ({
	type: 'LOGOUT',
});

export const UpdateUserStart = () => ({
	type: 'UPDATEUSER_START',
});

export const UpdateUserSuccess = (user) => ({
	type: 'UPDATEUSER_SUCCESS',
	payload: user,
});

export const UpdateUserFailure = () => ({
	type: 'UPDATEUSER_FAILURE',
});
