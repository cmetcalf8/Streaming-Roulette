import React, { useState } from 'react';
import '../styles/signup.css';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

export default function Signup() {

	const [addUser] = useMutation(ADD_USER);

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = async (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}

	const mutationResponse = await addUser({
		variables: {
		  email: formState.email,
		  password: formState.password,
		  firstName: formState.firstName,
		  lastName: formState.lastName,
		},
	  });
	  const token = mutationResponse.data.addUser.token;
	  Auth.login(token);
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="signup-success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="signup-error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="signup-form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="signup-messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		<label className="signup-label">Name</label>
		<input onChange={handleName} className="signup-input"
		value={name} type="text" />

		<label className="signup-label">Email</label>
		<input onChange={handleEmail} className="signup-input"
		value={email} type="email" />

		<label className="signup-label">Password</label>
		<input onChange={handlePassword} className="signup-input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="signup-btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
