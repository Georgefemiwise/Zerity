import { useState } from 'react';
import NavItem from '../../components/Navigation/Navlinks/NavItem';

export default function Login() {
	const [logInDetails, setLogInDetails] = useState({
		email: '',
		password: '',
	});

	function handleFormSubmit(event) {
		event.preventDefault();
	}
	function handleChange(e) {
		const { name, value } = e.target;

		setLogInDetails({ ...userDetails, [name]: value });
	}

	function handleSubmit() {
		console.log(logInDetails);
		// detail saving function
	}
	function loader() {
		<div className='animate-spin p-3 border-4 rounded-full border-primary  border-t-transparent border-b-transparent'></div>;
	}
	return (
		<div>
			<div className='mx-auto min-h-screen max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<h1 className='text-center text-2xl font-bold text-primary sm:text-3xl'>
						Sign In
					</h1>

					<form
						onSubmit={handleFormSubmit}
						className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-2xl sm:p-6 lg:p-8'>
						<div>
							<label
								htmlFor='email'
								className='sr-only'>
								Email
							</label>

							<div className='relative'>
								<input
									onChange={handleChange}
									type='email'
									name='email'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Enter email'
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor='password'
								className='sr-only'>
								Password
							</label>

							<div className='relative'>
								<input
									onChange={handleChange}
									type='password'
									name='password'
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Enter password'
								/>
							</div>
						</div>

						<button
							onClick={loader}
							type='submit'
							className=' block w-full shrink-0 rounded-md border  bg-primary  px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-secondary active:border-secondary active:border'>
							Log In
						</button>

						<p className='text-center text-sm  text-gray-500 flex items-center justify-center '>
							
							No account?
							<NavItem
								customColor='text-accent  underline ml-1 hover:no-underline'
								text='sign up'
								url='/register'
							/>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
