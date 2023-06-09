import React from 'react';

export default function Button({ children, type = 'submit', onClick}) {
	return (
		<button
			onClick={onClick}
			type={type}
			className=' block w-full shrink-0 rounded-md border capitalize
			 bg-primary  px-12 py-3 text-sm font-medium text-white
			 transition hover:bg-opacity-70 
			 focus:outline-none focus:ring active:text-secondary
			  active:border-secondary active:border'>
			{children}
		</button>
	);
}
