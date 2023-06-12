import React, { useEffect } from 'react';

function getRandomNumber() {
	return Math.floor(Math.random() * 101);
}

function moveDiv() {
	var randomNumber = getRandomNumber();
	var randomNumberDiv = document.getElementById('randomNumberDiv');
	randomNumberDiv.textContent = randomNumber;

	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	var targetTop = Math.random() * (windowHeight - 100);
	var targetLeft = Math.random() * (windowWidth - 100);

	randomNumberDiv.style.top = targetTop + 'px';
	randomNumberDiv.style.left = targetLeft + 'px';
}

function RandomNumberDiv() {
	useEffect(() => {
		// Call moveDiv initially
		moveDiv();

		// Call moveDiv every 3 seconds (3000 milliseconds)
		const intervalId = setInterval(moveDiv, 7000);

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	return <div className='absolute p-10 rounded-full duration-[15000ms] ease-in-out bg-pink-400' id='randomNumberDiv'></div>;
}

export default RandomNumberDiv;
