import React, { useState } from 'react';
import AnswerOption from './AnswerOption';

const Question = ({ question, answers,snapShot }) => {
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	const handleAnswerSelect = (answer) => {
		setSelectedAnswer(answer);
	};

	return (
		<div className='mt-5 group'>
			<h2>{question}</h2>
			<fieldset className=''>
				{answers.map((answer, index) => (
					<AnswerOption
						key={index}
						answer={answer}
						isSelected={selectedAnswer === answer}
						onSelectAnswer={handleAnswerSelect}
					/>
				))}
			</fieldset>
			<div class='flex justify-end'>
				<button onClick={snapShot} className='-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-4 w-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						stroke-width='2'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
						/>
					</svg>

					<span class=' font-medium sm:text-xs'>
						code
					</span>
				</button>
			</div>
		</div>
	);
};

export default Question;

