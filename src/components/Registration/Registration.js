import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-services';
import './Registration.css'


export class Registration extends Component {
    state = { error: null };

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { name, username, password, confirmPassword } = ev.target;

		this.setState({ error: null });
		if (password.value === confirmPassword.value) {
			AuthApiService.postUser({
				user_name: username.value,
				password: password.value,
				full_name: name.value
			})
				.then(() => {
					return AuthApiService.postLogin({
						user_name: username.value,
						password: password.value
					});
				})
				.then((res) => {
					TokenService.saveAuthToken(res.authToken);
					window.location.replace('/home');
					username.value = '';
					password.value = '';
					confirmPassword.value = '';
					name.value = '';
				})
				.catch((res) => {
					this.setState({ error: res.error });
				});
		} else {
			this.setState({ error: 'Passwords dont Match' });
		}
	};

	render() {
		const { error } = this.state;
		return (
			<div className="registerpage">
				<div className="register">
					<Link className="register-header" to="/">
						<h1>Shirya</h1>
					</Link>
					<h3>Register</h3>

					<form className="RegistrationForm" onSubmit={this.handleSubmit}>
						<div  className="alert" role="alert">{error && <p className="error">{error}</p>}</div>
						<div className="username">
							<label htmlFor="RegistrationForm__username">{/* Username */}</label>
							<input
								name="username"
								type="text"
								required
								id="RegistrationForm__username"
								placeholder="Username"
							/>
						</div>
						<div className="password">
							<label htmlFor="RegistrationForm__password">{/* Password */}</label>
							<input
								name="password"
								type="password"
								required
								id="RegistrationForm__password"
								placeholder="Password"
							/>
						</div>
						<div className="password">
							<label htmlFor="RegistrationForm__confirmPassword">{/* Confirm Password */}</label>
							<input
								name="confirmPassword"
								type="password"
								required
								id="RegistrationForm__confirmPassword"
								placeholder="Confirm Password"
							/>
						</div>
						<div className="full_name">
							<label htmlFor="RegistrationForm__name">{/* name */}</label>
							<input
								name="name"
								type="text"
								required
								id="RegistrationForm__name"
								placeholder="Name"
							/>
						</div>
						<button className="submit-button" type="submit">
							Submit
						</button>
						<br />
						<button className="login-btn" type="button" onClick={() => window.location.replace('/login')}>
							I already have an account
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Registration
