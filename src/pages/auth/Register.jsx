import React from 'react';

import NavItem from '../../components/Navigation/navlinks/NavItem';
import Alert from '../../utils/Alert';
import Button from '../../components/button/Button';
import useFormValidation from '../../hooks/useFormValidation';

const Register = () => { 
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		program: '',
		indexNumber: '',
		password: '',
		PasswordConfirmation: '',
	};

	const validateForm = (values) => {
		let errors = {};

		if (!values.firstName) {
			errors.firstName = 'First Name is required';
		}

		if (!values.lastName) {
			errors.lastName = 'Last Name is required';
		}

		if (!values.email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Email is invalid';
		}

		if (!values.program) {
			errors.program = 'Program is required';
		}

		if (!values.indexNumber) {
			errors.indexNumber = 'Index Number is required';
		}

		if (!values.password) {
			errors.password = 'Password is required';
		} else if (values.password.length < 6) {
			errors.password = 'Password must be at least 6 characters long';
		}

		if (values.password !== values.PasswordConfirmation) {
			errors.PasswordConfirmation = 'Passwords do not match';
		}

		return errors;
	};

	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useFormValidation(initialState, validateForm);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleSubmit(event);
	};

	return (
		<div>
			{Object.keys(errors).length > 0 && (
				<Alert
					message='Failed to create account'
					type='warning'
					showAlert={() => {}}
				/>
			)}
			<div className='max-w-screen-xl min-h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8'>
				<div className='max-w-lg mx-auto'>
					<h1 className='font-extrabold text-center text-white sm:text-4xl'>
						Get Started
					</h1>
					<p className='max-w-md mx-auto mt-4 text-center text-gray-500'>
						Use the below form to get started with your
						registration
					</p>

					{/* form start  */}
					<form
						onSubmit={handleFormSubmit}
						className='p-4 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl sm:p-6 lg:p-8 border-slate-500'>
						<div className='grid grid-cols-6 gap-6'>
							<div className='col-span-6 sm:col-span-3'>
								{errors.firstName && (
									<p className='text-sm text-error'>
										{errors.firstName}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.firstName
											? 'border-error'
											: ''
									}`}
									placeholder='John'
									value={values.firstName}
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								{errors.lastName && (
									<p className='text-sm text-error'>
										{errors.lastName}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.lastName
											? 'border-error'
											: ''
									}`}
									placeholder='Smith'
									value={values.lastName}
								/>
							</div>

							<div className='col-span-6'>
								{errors.email && (
									<p className='text-sm text-error'>
										{errors.email}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.email
											? 'border-error'
											: ''
									}`}
									placeholder='example001@ttu.edu.gh'
									autoComplete='true'
									value={values.email}
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								{errors.program && (
									<p className='text-sm text-error'>
										{errors.program}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.program
											? 'border-error'
											: ''
									}`}
									placeholder='Btech IT'
									value={values.program}
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								{errors.indexNumber && (
									<p className='text-sm text-error'>
										{errors.indexNumber}
									</p>
								)}
								<label
									htmlFor='indexNumber'
									className='block text-sm font-medium text-gray-400'>
									Index Number
								</label>
								<input
									onChange={handleChange}
									type='text'
									id='indexNumber'
									name='indexNumber'
									placeholder='001'
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.indexNumber
											? 'border-error'
											: ''
									}`}
									value={values.indexNumber}
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								{errors.password && (
									<p className='text-sm text-error'>
										{errors.password}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.password
											? 'border-error'
											: ''
									}`}
									placeholder='Enter password'
									value={values.password}
								/>
							</div>

							<div className='col-span-6 sm:col-span-3'>
								{errors.PasswordConfirmation && (
									<p className='text-sm text-error'>
										{errors.PasswordConfirmation}
									</p>
								)}
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
									className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
										errors.PasswordConfirmation
											? 'border-error'
											: ''
									}`}
									placeholder='Confirmation Password'
									value={values.PasswordConfirmation}
								/>
							</div>

							<div className='flex-col col-span-6 sm:flex sm:items-center sm:gap-4'>
								<Button
									children='Create my account'
									type='submit'
									disabled={isSubmitting}
									
								/>

								<p className='flex mt-4 text-sm text-center text-gray-500 sm:mt-0'>
									Already have an account?
									<NavItem
										customColor='text-accent underline ml-1 hover:no-underline'
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
};

export default Register;
