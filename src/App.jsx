import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hall from './pages/Hall';
import Register from './pages/user/Register';
import Account from './pages/user/Account';
import Logout from './pages/user/Logout';
import NoPage from './pages/NoPage';
import Login from './pages/user/Login';

export default function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					index
					element={<Home />}
				/>
				<Route
					path='hall'
					element={<Hall />}
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
		</>
	);
}
