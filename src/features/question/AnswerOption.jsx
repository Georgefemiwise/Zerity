import React from 'react';

const AnswerOption = ({ answer, isSelected, onSelectAnswer }) => {
	return (
		<div>
			<input
				type='radio'
				id={answer}
				name='answer'
				value={answer}
				checked={isSelected}
				onChange={() => onSelectAnswer(answer)}
				className=' hidden'
			/>
			<label
				htmlFor={answer}
				className={`ml-5 p-2 w-1/2 ${
					isSelected &&
					'flex cursor-pointer items-center justify-between rounded-md border border-gray-100 bg-indigo-900  text-sm font-medium shadow-sm '
				}`}>
				{answer}
			</label>
		</div>
	);
};

export default AnswerOption;

