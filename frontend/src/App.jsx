import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import { Context } from './context/Context';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Wirte';

const App = () => {
	const { user } = useContext(Context);

	return (
		<>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={user ? <Home /> : <Login />} />
				<Route path='/register' element={user ? <Home /> : <Register />} />
				<Route path='/write' element={user ? <Write /> : <Register />} />
				<Route path='/setting' element={user ? <Setting /> : <Register />} />
				<Route path='/post/:postId' element={<Single />} />
			</Routes>
		</>
	);
};

export default App;
