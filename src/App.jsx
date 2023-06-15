import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Box } from '@chakra-ui/react';

function App() {
	return (
		<Box
			
			width={'full'}
			height={'full'}>
			<Routes>
				<Route
					index
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/dashboard'
					element={<DashboardPage />}
				/>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/signup'
					element={<SignupPage />}
				/>
			</Routes>
		</Box>
	);
}

export default App;
