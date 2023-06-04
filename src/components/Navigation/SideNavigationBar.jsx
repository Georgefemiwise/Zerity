import React from 'react';
import MainNav from './Navlinks/MainNav';



// Main component for the side navigation bar
export default  function SideNavigationBar() {
	return (
		<div>
			<div className='flex h-screen flex-col justify-between border-e bg-gray-900 max-w-[10rem]'>
				<div className='px-4 py-6'>
					<MainNav />
				</div>

				{/* user detail  */}
				<div className='sticky inset-x-0 bottom-0 border-t border-gray-100'>
					<a
						href='#'
						className='flex items-center gap-2 bg-gray-900 p-4 '>
						<div>
							<p className='text-xs  text-gray-500  hover:text-gray-400 active:bg-gray-100'>
								<strong className='block font-medium capitalize'>
									john doe
								</strong>
								<span>johndoe@gmail.com</span>
							</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}




