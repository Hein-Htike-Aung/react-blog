import { Route, Routes } from 'react-router-dom';
import TopBar from './components/topbar/TopBar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Write from './pages/write/Wirte';
import Setting from './pages/setting/Setting';
import SinglePost from './components/singlePost/SinglePost';

const App = () => {
	const user = false;

	return (
		<>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={user ? <Home /> : <Login />} />
				<Route path='/register' element={user ? <Home /> : <Register />} />
				<Route path='/write' element={user ? <Write /> : <Register />} />
				<Route path='/setting' element={user ? <Setting /> : <Register />} />
				<Route path='/post/:postId' element={<SinglePost />} />
			</Routes>
		</>
	);
};

export default App;
