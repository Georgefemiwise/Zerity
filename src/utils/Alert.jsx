import React, { useEffect } from 'react';

export default function Alert({ message, type, showAlert }) {
	useEffect(() => {
		const timer = setTimeout(() => {
			showAlert(false);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [showAlert]);
	const success =
		'border-success bg-success dark:border-success dark:bg-success';
	const warning =
		'border-warning bg-warning dark:border-warning dark:bg-warning';
	const danger =
		'border-error bg-error  dark:border-error dark:bg-error text-error ';

	return (
		<div className='absolute  top-5 left-5'>
			{showAlert && (
				<div
					role='alert'
					className='rounded border-s-4 '>
					<strong
						className={`block font-medium p-4 dark:text-red-100 ${
							type === 'success'
								? success
								: type === 'warning'
								? warning
								: danger
						}`}>
						{type === 'success'
							? 'Success'
							: type === 'warning'
							? 'Warning'
							: 'Something went wrong'}
					</strong>

					<p className='mt-2 text-sm text-red-700 dark:text-red-200'>
						{message}
					</p>
				</div>
			)}
		</div>
	);
}
