import React, { useState } from 'react';
import SnapShot from './snapShot/SnapShot';
import NavigationBar from './Navigation/NavigationMenu';
import Question from './question/Question';

const dommQuestions = [
	{
		question: 'What is the capital of France?',
		answers: ['Paris', 'London', 'Berlin', 'Rome'],
	},
	{
		question: 'Who painted the Mona Lisa?',
		answers: [
			'Leonardo da Vinci',
			'Vincent van Gogh',
			'Pablo Picasso',
			'Claude Monet',
		],
	},
	{
		question: "Which planet is known as the 'Red Planet'?",
		answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
	},
	{
		question: 'Who wrote the Harry Potter book series?',
		answers: [
			'J.K. Rowling',
			'J.R.R. Tolkien',
			'George R.R. Martin',
			'Stephen King',
		],
	},
	{
		question: 'What is the chemical symbol for gold?',
		answers: ['Au', 'Ag', 'Fe', 'Hg'],
	},
	{
		question: 'Which country is famous for the Great Wall?',
		answers: ['China', 'India', 'Brazil', 'Egypt'],
	},
	{
		question: 'Who was the first person to step on the moon?',
		answers: [
			'Neil Armstrong',
			'Buzz Aldrin',
			'Yuri Gagarin',
			'John F. Kennedy',
		],
	},
	{
		question: 'What is the largest ocean in the world?',
		answers: [
			'Pacific Ocean',
			'Atlantic Ocean',
			'Indian Ocean',
			'Arctic Ocean',
		],
	},
	{
		question: 'Who is the current President of the United States?',
		answers: [
			'Joe Biden',
			'Barack Obama',
			'Donald Trump',
			'George Washington',
		],
	},
	{
		question: 'Which city hosted the 2020 Summer Olympics?',
		answers: ['Tokyo', 'Rio de Janeiro', 'London', 'Beijing'],
	},
];

export default function Main() {
	const [readySnapShot, setReadySnapShot] = useState(false);
	function toggleSnapShot() {
		setReadySnapShot((prev) => !prev);
	}
	return (
		<div className=' h-full ml-10'>
			{/* <NavigationBar /> */}
			{/* <div className='status-bar flex flex-row w-full h-fit justify-end px-5 py-1 '>
				<button
					onClick={toggleSnapShot}
					className=' bg-green-400 capitalize'>
					{readySnapShot ? 'close' : 'open'}
				</button>
			</div> */}
			{dommQuestions.map((question, index) => (
				<Question
					question={question.question}
					questionNumber={index + 1}
					answers={question.answers}
				/>
			))}
		</div>
	);
}