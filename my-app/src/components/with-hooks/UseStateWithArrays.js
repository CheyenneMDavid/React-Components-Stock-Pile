import React, { useState } from 'react';

function UseStateWithArrays() {
	const [nums, setNums] = useState([1, 2, 3]);
	const addNums = () => {
		// Using spread operator. NOTE! Do not use the "push or pop methods,"
		// as demonstrated in the 'buggyPushNums' function below. Using those methods
		// will modify the 'nums' array, but React won't notice the change, so it won't get rendered.
		// Instead, just using the spread operator as it is here will be sufficient.
		// React will pick up the change and render it.
		// In React, only ever use pure functions like 'map',  'filter', 'reduce' or 'spread operator'
		// that return a copy of an existing array and  therefore are a safe way of updating the state.

		setNums([...nums, nums.length + 1]);
	};

	// Function is defined as 'removeNum'. It removes the last number
	// from the 'nums' array and updates the state using 'setNums'.
	const removeNum = () => {
		// Using the 'setNums' function to update the state of the 'nums' array. The new
		// state will be a modified version of the current 'nums' array with the last
		// element removed.
		setNums(
			// Use 'filter' method to create a new array based on the 'nums' array.
			// The 'filter' method iterates over each element (item) and its index (idx) in
			// the 'nums' array. *Remember* "item" and "idx" are conventional names.
			nums.filter((item, idx) => {
				// The callback function checks if the current index (idx)
				// is not equal (!==) *NOT STRICT EQUALITY* to the index of the last element in the 'nums' array.
				// This comparison determines whether an element is included or excluded in
				// the new array.
				return idx !== nums.length - 1;
			}),
		);
	};

	// *NOTE*  When in React, writing a function in this manner, will result in the functions being
	// executed, but not rendered.  The same would be true of a function that subtracts, using
	// the 'pop method'
	const buggyPushNums = () => {
		nums.push(nums.length + 1);
		setNums(nums);
		console.log(nums);
	};
	return (
		<div>
			<button onClick={addNums}>Add Item</button>
			<button onClick={removeNum}>Remove Item</button>
			<button onClick={buggyPushNums}>Buggy Push Item</button>
			<ul>
				{nums.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>
		</div>
	);
}

export default UseStateWithArrays;
