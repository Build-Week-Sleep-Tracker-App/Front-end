import React from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from 'react-redux';
import { signUp, login } from '../actions/actionCreators';

const LoginPage = props => {
	return (
		<section className="forms">
			<div className="inner">
				<Login
					login={props.login}
					history={props.history}
				/>
				<Register signUp={props.signUp} />
			</div>
		</section>
	);
};

export default connect(
	state => state,
	{ signUp, login }
)(LoginPage);