import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

// shape of form field defaults
const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

function SignUpForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	// deconstruct
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// confirm password fields match
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email is already in use.');
			} else {
				console.log('User creation encountered an error', error);
			}
		}

		// create a user document with what this returns
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign Up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<label>Email</label>
				<input
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<label>Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignUpForm;
