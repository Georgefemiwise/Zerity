import React from 'react';

export default function Register() {
	return (
		<div>
			<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
						Get started today
					</h1>

					<p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Obcaecati sunt dolores deleniti
						inventore quaerat mollitia?
					</p>

					<form
						action=''
						className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 border border-slate-500'>
						<form className='mt-8 grid grid-cols-6 gap-6'>
							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='FirstName'
									className='block text-sm font-medium text-gray-400'>
									First Name
								</label>

								<input
									type='text'
									id='FirstName'
									name='first_name'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='LastName'
									className='block text-sm font-medium text-gray-400'>
									Last Name
								</label>

								<input
									type='text'
									id='LastName'
									name='last_name'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
								/>
							</div>

							<div className='col-span-6'>
								<label
									htmlFor='Email'
									className='block text-sm font-medium text-gray-400'>
									Email
								</label>

								<input
									type='email'
									id='Email'
									name='email'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='Password'
									className='block text-sm font-medium text-gray-400'>
									Password
								</label>

								<input
									type='password'
									id='Password'
									name='password'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='PasswordConfirmation'
									className='block text-sm font-medium text-gray-400'>
									Password Confirmation
								</label>

								<input
									type='password'
									id='PasswordConfirmation'
									name='password_confirmation'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
								/>
							</div>

							<div className='col-span-6'>
								<label
									htmlFor='MarketingAccept'
									className='flex gap-4'>
									<input
										type='checkbox'
										id='MarketingAccept'
										name='marketing_accept'
										className='h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm'
									/>

									<span className='text-sm text-gray-400'>
										I want to receive emails about
										events, product updates and
										company announcements.
									</span>
								</label>
							</div>

							{/* <div className='col-span-6'>
								<p className='text-sm text-gray-400'>
									By creating an account, you agree
									to our
									<a
										href='#'
										className='text-gray-700 underline'>
										terms and conditions
									</a>
									and
									<a
										href='#'
										className='text-gray-700 underline'>
										privacy policy
									</a>
									.
								</p>
							</div> */}

							<div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
								<button className='inline-block shrink-0 rounded-md border  bg-indigo-600  px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
									Create my account
								</button>

								<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
									Already have an account?
									<a
										href='#'
										className='text-indigo-600 underline ml-1'>
										Log in
									</a>
									.
								</p>
							</div>
						</form>
					</form>
				</div>
			</div>
		</div>
	);
}
