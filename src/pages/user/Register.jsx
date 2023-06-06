import { useState } from 'react';
import NavItem from '../../components/Navigation/Navlinks/NavItem';

export default function Register() {
	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		program: '',
		indexNumber: '',
		password: '',
		PasswordConfirmation: '',
	});

	function handleFormSubmit(event) {
		event.preventDefault();
	}
	function handleChange(e) {
		const { name, value } = e.target;

		setUserDetails({ ...userDetails, [name]: value });
	}

	function handleSubmit() {
		console.log(userDetails);
		// detail saving function
	}
	return (
		<div>
			<div className='mx-auto min-h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<h1 className='text-center text-2xl font-bold text-primary sm:text-3xl'>
						Get Started
					</h1>
					<p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
						Us the bellow form to get started with your
						registerstion
					</p>
					<form
						onSubmit={handleFormSubmit}
						className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8  border-slate-500'>
						<div className='mt-8 grid grid-cols-6 gap-6'>
							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='firstName'
									className='block text-sm font-medium text-gray-400'>
									First Name
								</label>

								<input
									onChange={handleChange}
									type='text'
									id='firstName'
									name='firstName'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='John'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='lastName'
									className='block text-sm font-medium text-gray-400'>
									Last Name
								</label>

								<input
									onChange={handleChange}
									type='text'
									id='lastName'
									name='lastName'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Smith'
								/>
							</div>

							<div className='col-span-6'>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-400'>
									Email
								</label>

								<input
									onChange={handleChange}
									type='email'
									id='email'
									name='email'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='example001@ttu.edu.gh'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='program'
									className='block text-sm font-medium text-gray-400'>
									Program
								</label>

								<input
									onChange={handleChange}
									type='text'
									id='program'
									name='program'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Btech IT'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='indexNumber'
									className='block text-sm font-medium text-gray-400'>
									index Number
								</label>

								<input
									onChange={handleChange}
									type='text'
									id='indexNumber'
									name='indexNumber'
									placeholder='001'
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
									onChange={handleChange}
									type='password'
									id='Password'
									name='password'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Enter password'
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								<label
									htmlFor='PasswordConfirmation'
									className='block text-sm font-medium text-gray-400'>
									Password Confirmation
								</label>

								<input
									onChange={handleChange}
									type='password'
									id='PasswordConfirmation'
									name='PasswordConfirmation'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder=' Confirmation Password'
								/>
							</div>

							{/* <div className='col-span-6'>
								<label
									htmlFor='MarketingAccept'
									className='flex gap-4'>
									<input
										onChange={handleChange}
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
							</div> */}

							<div className='col-span-6'>
								<p className='text-sm text-gray-400'>
									By creating an account, you agree
									to our
									<a> terms and conditions </a>
									and
									<a> privacy policy</a>
								</p>
							</div>

							<div className='col-span-6 sm:flex sm:items-center sm:gap-4 flex-col'>
								<button
									onClick={handleSubmit}
									className=' block w-full shrink-0 rounded-md border  bg-primary  px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-secondary active:border-secondary active:border'>
									Create my account
								</button>

								<p className=' mt-4 text-sm text-gray-500 sm:mt-0 text-center flex'>
									Already have an account?
									<NavItem
										customColor='text-accent  underline ml-1 hover:no-underline'
										text='Log in'
										url='/login'
									/>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
