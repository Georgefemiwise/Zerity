import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavItem from '../../components/Navigation/Navlinks/NavItem';
export default function Account() {

const navigation = useNavigate()
	return (
		<>
			<h1>Account</h1>
			<div className='sticky inset-x-0 bottom-0 border-t border-gray-500  p-2'>
				<NavItem
					url={'logout'}
					text={'Logout'}
				/>
				{/* <button onClick={()=> {navigation('/account/logout')}}>logout</button> */}
			</div>
			<Outlet/>
		</>
	);
}
