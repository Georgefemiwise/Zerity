import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Register from './pages/auth/Register';
import Account from './pages/auth/Account';
import Logout from './pages/auth/Logout';
import NoPage from './pages/NoPage';
import Login from './pages/auth/Login';

export default function App() {
	return (
		<div className='bg-gray-900'>
			<Routes>
				<Route
					path='/'
					index
					element={<Home />}
				/>
				<Route
					path='main'
					element={<Main />}
				/>
				<Route
					path='register'
					element={<Register />}
				/>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='account'
					element={<Account />}>
					<Route
						path='logout'
						element={<Logout />}></Route>
				</Route>
				<Route
					path='*'
					element={<NoPage />}
				/>
			</Routes>
		</div>
	);
}
