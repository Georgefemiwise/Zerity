import React from 'react';
import NavigatinLink from './links/NavigationLink';
import ZerityIcon from '../../assets/Zerity-icon.svg'

const NavUrls = [
	{
		icon: (
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
					d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
				/>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
				/>
			</svg>
		),
		children: 'general',
		url: '#',
	},
	{
		icon: (
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
					d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
				/>
			</svg>
		),
		children: 'billing',
		url: '#',
	},
	{
		icon: (
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
					d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
				/>
			</svg>
		),
		children: 'invoice',
		url: '#',
	},
	{
		icon: (
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
					d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
				/>
			</svg>
		),
		children: 'account',
		url: '#',
	},
	{
		icon: (
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
					d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
				/>
			</svg>
		),
		children: 'title',
		url: '#',
	},
];

export default function NavBar() {
	return (
		<div className='flex h-screen w-16 flex-col justify-between border-e bg-gray-950'>
			<div>
				<div className='inline-flex h-16 w-16 items-center justify-center'>
					<span className='grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600'>
						<img src={ZerityIcon} alt="" />
					</span>
				</div>

				<div className='border-t border-gray-500'>
					<nav
						aria-label='Main Nav'
						className='flex flex-col p-2'>
						<ul className='space-y-1  pt-4'>
							{NavUrls.map((props) => (
								<NavigatinLink
									icon={props.icon}
									children={props.children}
									url={props.url}
								/>
							))}
						</ul>
					</nav>
				</div>
			</div>

			<div className='sticky inset-x-0 bottom-0 border-t border-gray-500  p-2'>
				<form action='/logout'>
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
				</form>
			</div>
		</div>
	);
}

// 	return (
// 		<div>
// 			<span className=' grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs font-semibold text-gray-600'>
// 				Zerity
// 			</span>
// 			<nav
// 				aria-label='Main Nav'
// 				className='mt-6 flex flex-col space-y-1 '>
// 				<NavigatinLink />
{
	/* TODO nav link that collaps
 TODO main heading at the top */
}
// 				<a
// 					href='#'
// 					className=' group-hover:hidden flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 					<svg
// 						xmlns='http://www.w3.org/2000/svg'
// 						className='h-5 w-5 opacity-75'
// 						fill='none'
// 						viewBox='0 0 24 24'
// 						stroke='currentColor'
// 						stroke-width='2'>
// 						<path
// 							stroke-linecap='round'
// 							stroke-linejoin='round'
// 							d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
// 						/>
// 					</svg>

// 					<span className='text-sm font-medium hidden group-hover:flex'>
// 						{' '}
// 						Billing{' '}
// 					</span>
// 				</a>

// 				<a
// 					href='#'
// 					className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 					<svg
// 						xmlns='http://www.w3.org/2000/svg'
// 						className='h-5 w-5 opacity-75'
// 						fill='none'
// 						viewBox='0 0 24 24'
// 						stroke='currentColor'
// 						stroke-width='2'>
// 						<path
// 							stroke-linecap='round'
// 							stroke-linejoin='round'
// 							d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
// 						/>
// 					</svg>

// 					<span className='text-sm font-medium'> Invoices </span>
// 				</a>

// 				<DropDownLink />

// 				<details className='group [&_summary::-webkit-details-marker]:hidden'>
// 					<summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 						<div className='flex items-center gap-2'>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-5 w-5 opacity-75'
// 								fill='none'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 								stroke-width='2'>
// 								<path
// 									stroke-linecap='round'
// 									stroke-linejoin='round'
// 									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
// 								/>
// 							</svg>

// 							<span className='text-sm font-medium'>
// 								{' '}
// 								Account{' '}
// 							</span>
// 						</div>

// 						<span className='shrink-0 transition duration-300 group-open:-rotate-180'>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-5 w-5'
// 								viewBox='0 0 20 20'
// 								fill='currentColor'>
// 								<path
// 									fill-rule='evenodd'
// 									d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
// 									clip-rule='evenodd'
// 								/>
// 							</svg>
// 						</span>
// 					</summary>

// 					<nav
// 						aria-label='Account Nav'
// 						className='mt-2 flex flex-col px-4'>
// 						<a
// 							href='#'
// 							className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-5 w-5 opacity-75'
// 								fill='none'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 								stroke-width='2'>
// 								<path
// 									stroke-linecap='round'
// 									stroke-linejoin='round'
// 									d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
// 								/>
// 							</svg>

// 							<span className='text-sm font-medium'>
// 								{' '}
// 								Details{' '}
// 							</span>
// 						</a>

// 						<a
// 							href='#'
// 							className='flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 							<svg
// 								xmlns='http://www.w3.org/2000/svg'
// 								className='h-5 w-5 opacity-75'
// 								fill='none'
// 								viewBox='0 0 24 24'
// 								stroke='currentColor'
// 								stroke-width='2'>
// 								<path
// 									stroke-linecap='round'
// 									stroke-linejoin='round'
// 									d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
// 								/>
// 							</svg>

// 							<span className='text-sm font-medium'>
// 								{' '}
// 								Security{' '}
// 							</span>
// 						</a>

// 						<form action='/logout'>
// 							<button
// 								type='submit'
// 								className='flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
// 								<svg
// 									xmlns='http://www.w3.org/2000/svg'
// 									className='h-5 w-5 opacity-75'
// 									fill='none'
// 									viewBox='0 0 24 24'
// 									stroke='currentColor'
// 									stroke-width='2'>
// 									<path
// 										stroke-linecap='round'
// 										stroke-linejoin='round'
// 										d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
// 									/>
// 								</svg>

// 								<span className='text-sm font-medium'>
// 									{' '}
// 									Logout{' '}
// 								</span>
// 							</button>
// 						</form>
// 					</nav>
// 				</details>
// 			</nav>
// 		</div>
// 	);
