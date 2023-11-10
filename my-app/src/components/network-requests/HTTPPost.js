import React, { Component } from 'react';
import axios from 'axios';

// Defines the class HTTPPost that extends React.Component and exports it for use in other files.
export class HTTPPost extends Component {
	// Constructor method to initialize the state.
	constructor(props) {
		super(props); // Calling the constructor of the parent class (Component)

		// Sets the initial state with apiResponse set to null.
		this.state = {
			apiResponse: null,
		};
	}

	// The postToApi function that's defined in the HTTPPost class, with arrow function syntax of " = () => "
	// ensures that the "this" inside the method refers to the class instance.  It'll be triggered
	// when the button is clicked, due to the onClick that is attached to the button.
	postToApi = () => {
		// Using the installed axios module to send the POST request to the URL that's defined.
		axios
			// This is the URL that the POST request is sent to.
			.post('https://jsonplaceholder.typicode.com/posts', {
				// title, body and userID is the data being sent.
				title: 'Hello world!', // Sending a title.
				body: 'It works!', // Sending a body.
				userId: 123, // Sending a userId.
			})
			// Using the promise handler ".then" to carry out the following task.
			.then((response) => {
				// Updating the state with the response data when the request is successful.
				this.setState({
					apiResponse: response.data,
				});
			});
	};

	// Render method to display the component.
	render() {
		// Destructuring apiResponse from state for easier access.
		const { apiResponse } = this.state;

		return (
			<div>
				{/* Button to trigger POST request, with an onClick handler attached to it. */}
				<button onClick={this.postToApi}>Create Post</button>
				{/* Conditional rendering based on the API response. */}
				{apiResponse ? (
					// Displaying the API response data if it exists.
					<div>
						<h1>{apiResponse.title}</h1>
						<p>post id: {apiResponse.id}</p>
						<p>{apiResponse.body}</p>
						<p>user id: {apiResponse.userId}</p>
					</div>
				) : (
					// Prompt to click the button if apiResponse is null.
					<p>Please click the button above.</p>
				)}
			</div>
		);
	}
}

export default HTTPPost;
