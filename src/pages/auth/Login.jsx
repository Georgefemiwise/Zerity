import { useState } from 'react';
import NavItem from '../../components/Navigation/navlinks/NavItem';
import Alert from '../../utils/Alert';
import Button from '../../components/button/Button';
import useFormValidation from '../../hooks/useFormValidation';

export default function Login() {
	const initialState = {
		email: '',
		password: '',
	};

	const validate = (values) => {
		let errors = {};

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Email is invalid';
		}

		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 8) {
			errors.password = 'Password must be between 8 and 16 characters';
		}

		return errors;
	};

	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useFormValidation(initialState, validate);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (Object.keys(errors).length === 0 && isSubmitting) {
			handleSubmit(event);
		}
	};

	return (
		<div className='relative'>
			<div className='max-w-screen-xl min-h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8'>
				<div className='max-w-lg mx-auto'>
					<h1 className='text-2xl font-bold text-center text-white sm:text-3xl'>
						Sign In
					</h1>
					<form
						onSubmit={handleFormSubmit}
						className='p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl sm:p-6 lg:p-8'>
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
									value={values.email}
									className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12'
									placeholder='Enter email'
								/>
								{errors.email && (
									<p className='mt-1 text-sm text-red-500'>
										{errors.email}
									</p>
								)}
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
									value={values.password}
									className='w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12'
									placeholder='Enter password'
								/>
								{errors.password && (
									<p className='mt-1 text-sm text-red-500'>
										{errors.password}
									</p>
								)}
							</div>
						</div>

						<Button children='Login' />

						<p className='flex items-center justify-center text-sm text-center text-gray-500 '>
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
