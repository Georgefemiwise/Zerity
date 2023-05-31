import React, { useState } from 'react';

// const [selectedAnswer, setSelectedAnswer] = useState('');

// const handleRadioChange = (event) => {
// 	setSelectedAnswer(event.target.value);
// };

export default function Answers({ answer, id }) {
	return (
		<div>
			<fieldset className='grid grid-cols-2 gap-4'>
				<div>
					<input
						type='radio'
						id={`answer-${id}`}
						value={'answer'}
						checked={selectedAnswer === answer}
						onChange={handleRadioChange}
						className='peer hidden [&:checked_+_label_svg]:block'
					/>

					<label
						htmlFor={`answer-${id}`}
						className='block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500'>
						<div className='flex items-center justify-between'>
							<p className='text-gray-700'>{answer}</p>

							<svg
								className='hidden h-5 w-5 text-blue-600'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
									clipRule='evenodd'
								/>
							</svg>
						</div>

						{/* <p className='mt-1 text-gray-900'>Free</p> */}
					</label>
				</div>
			</fieldset>
		</div>
	);
}
