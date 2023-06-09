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
		}

		return errors;
	};

	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useFormValidation(initialState, validate);

	const handleFormSubmit = (event) => {event.preventDefault();
		if (Object.keys(errors).length === 0 && isSubmitting) {
			handleSubmit(event);
		}
	};
// const handleFormSubmit = (event) => {
// 	
// 	handleSubmit(event);
// };
	return (
		<div className='relative'>
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
									value={values.email}
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Enter email'
								/>
								{errors.email && (
									<p className='text-red-500 text-sm mt-1'>
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
									className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
									placeholder='Enter password'
								/>
								{errors.password && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.password}
									</p>
								)}
							</div>
						</div>

						<Button children='Login' />

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
