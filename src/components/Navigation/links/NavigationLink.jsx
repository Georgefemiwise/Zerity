import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavLinks({ icon, children, url }) {
	return (
		<li>
			<NavLink
				to={url}
				className='group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700'>
				{icon}

				<span className='absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs capitalize font-medium text-white opacity-0 group-hover:opacity-100'>
					{children}
				</span>
			</NavLink>
		</li>
	);
}


