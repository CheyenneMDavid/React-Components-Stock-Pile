import React, { Component } from 'react';
import axios from 'axios';

// This code creates a React component that makes an HTTP GET request to a specified URL when
//the component is first mounted.It then either displays the fetched posts or shows an error
// message or a loading graphic depending on the response on the response.

// Defining a class component named HTTPRequests that extends the React Component class
export class HTTPRequests extends Component {
	constructor(props) {
		super(props); // Calling the constructor of the parent class (Component)

		// Initializing the state with an empty posts array and a null error value
		this.state = {
			posts: [],
			error: null,
		};
	}

	// componentDidMount is a lifecycle method that runs after the component is mounted to the DOM
	componentDidMount() {
		// Making a GET request to a specified URL using axios
		axios
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => {
				// Handling the response in case of a successful request
				console.log(response); // Logging the response to the console
				this.setState({
					// Updating the state with the fetched data
					posts: Array.isArray(response.data) ? response.data : [response.data],
				});
			})
			.catch((error) => {
				// Handling errors if the request fails
				this.setState({
					error: error.message, // Setting the error message in the state
				});
			});
	}

	// render method returns the JSX that defines the component's UI
	render() {
		const posts = this.state.posts; // Retrieving posts from the state
		return (
			<div>
				<h2>Posts:</h2>
				{posts.length ? (
					// Calling the map() method for the posts array to render each post
					posts.map((post) => (
						<div key={post.id}>
							<h2>
								{post.id}. {post.title} // Displaying the post title
							</h2>
							<h4>By User ID {post.userId}</h4> // Displaying the user ID
							<p>{post.body}</p> // Displaying the post body
							<hr />
						</div>
					))
				) : this.state.error ? (
					// If there is an error, display the error message
					<p>{this.state.error}</p>
				) : (
					// If there are no posts and no error, display a loading message
					<h4>Loading posts ...</h4>
				)}
			</div>
		);
	}
}

// Exporting the HTTPRequests component as the default export
export default HTTPRequests;
