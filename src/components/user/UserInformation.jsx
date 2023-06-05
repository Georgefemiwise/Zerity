import React from 'react'

export default function UserInformation({userName}) {
  return (
		<div>
			<a
				href='{url}'
				className='group relative flex justify-center  capitalize rounded px-2 py-1.5 text-white hover:bg-gray-50 hover:text-gray-700 mr-5 items-base'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 opacity-75 mr-'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					stroke-width='2'>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
					/>
				</svg>
				{userName == null ? 'No User':`Hello ${userName}`}
			
				
			</a>
		</div>
  );
}

