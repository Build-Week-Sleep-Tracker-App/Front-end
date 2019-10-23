import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { connect } from 'react-redux';
import { logout } from '../actions/actionCreators';

const Footer = props => {
	return (
		<footer>
			<div className="inner">

			</div>
		</footer>
	);
};

export default connect(
	state => ({ isLoggedIn: state.login.isLoggedIn }),
	null
)(Footer);