import React from 'react';
import Login from './Login';
import Register from './Register';

const LoginPage = props => {
	return (
		<section className="forms">
			<div className="inner">
				<Login />
				<Register />
			</div>
		</section>
	);
};

export default LoginPage;