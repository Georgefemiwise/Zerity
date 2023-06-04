import React from 'react';
import SideNavgationBar from '../components/Navigation/SideNavigationBar';
import TopNavigationBar from '../components/Navigation/TopNavigationBar';
import Main from '../components/Main';


export default function Home() {
	return (
		<>
			<SideNavgationBar />
			<TopNavigationBar />

			<div className='p-4 sm:ml-20'>
				<div className='p-4 border-2 border-gray-200 border-dashed rounded-md dark:border-gray-700 mt-14 min-h-screen'>
					<Main />
				</div>
			</div>
		</>
	);
}