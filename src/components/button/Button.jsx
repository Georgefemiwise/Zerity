import React from 'react';

export default function Button({ children, type = 'submit', onClick}) {
	return (
		<button
			onClick={onClick}
			type={type}
			className='block w-full px-12 py-3 text-sm font-medium text-white capitalize transition border rounded-md shrink-0 bg-primary hover:bg-opacity-70 focus:outline-none focus:ring active:text-secondary active:border-secondary active:border'>
			{children}
		</button>
	);
}
