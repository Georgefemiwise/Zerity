import React from 'react';
import NavigationMenu from './NavigationMenu';

export default function SideNavigationBar() {
	return (
		<aside
			id='logo-sidebar'
			className='fixed top-0 left-0 z-40 w-fit h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-transparent dark:border-gray-700'
			aria-label='Sidebar'>
			<div className='h-full px-1   bg-white dark:bg-transparent'>
				<NavigationMenu />
			</div>
		</aside>
	);
}
