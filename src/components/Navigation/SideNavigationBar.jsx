import React from 'react';
import NavigationMenu from './NavigationMenu';

export default function SideNavigationBar() {
	return (
		<aside
			id='logo-sidebar'
			className='fixed top-0 left-0  w-fit h-screen z-50 transition-transform -translate-x-full  sm:translate-x-0 bg-red-600 dark:border-gray-700'
			aria-label='Sidebar'>
			<div className='h-full px-1 bg-indigo-900 dark:'>
				<NavigationMenu />
			</div>
		</aside>
	);
}
