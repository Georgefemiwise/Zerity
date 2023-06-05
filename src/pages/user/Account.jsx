import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export default function Account() {
	return (
		<>
			<h1>Account</h1>
			<div className='sticky inset-x-0 bottom-0 border-t border-gray-500  p-2'>
				<Link to='logout'>
					<button
						type='submit'
						className='group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 opacity-75'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							stroke-width='2'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
							/>
						</svg>

						<span className='absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100'>
							Logout
						</span>
					</button>
				</Link>
			</div>
			<Outlet />
		</>
	);
}
