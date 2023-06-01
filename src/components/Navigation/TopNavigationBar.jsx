import React from 'react'
import UserInformation from '../user/UserInformation';

export default function TopNavigationBar() {
  return (
		<nav className='fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
			<div className='ml-16* py-3 lg:px-5 lg:pl-3'>
				<div className='flex items-center justify-between '>
					<div className='flex items-center justify-center'>
						<a
							href='#'
							className='flex ml-2 md:mr-24'>
						
							<span className='self-center  font-semibold sm:text-xl whitespace-nowrap dark:text-white'>
								{/* Zerity */}
							</span>
						</a>
					</div>

					<UserInformation userName='jane' />
				</div>
			</div>
		</nav>
  );
}

