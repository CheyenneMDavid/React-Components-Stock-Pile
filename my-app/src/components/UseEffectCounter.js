import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
	const [count, setCount] = useState(0);
	const [time, setTime] = useState(0);

	useEffect(() => {
		console.log('count 1 effect');
		document.title = count;
	}, [count]);
	useEffect(() => {
		console.log('Creating timer');

		// Creating the interval function which will be poassed to the clearInterval function
		const interval = setInterval(() => {
			console.log('Interval executed');
			// Update to the time, happens here, inside the interval function.  Using the setTime
			// function and the interval I want to run it at, this being every 1000ms
			setTime((time) => time + 1);
		}, 1000);
		// returning the cleanup function
		return () => {
			console.log('cleaning up');
			// Clearing the interval by passing the interval
			clearInterval(interval);
		};
		// pass an empty array so that the function only executes once when the component mounts.
	}, []);
	return (
		<div>
			<button onClick={() => setCount((count) => count + 1)}>
				Increment Count ({count})
			</button>
			<h2>Time is {time}</h2>
		</div>
	);
}

export default UseEffectCounter;
