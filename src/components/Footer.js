import React from 'react';
import logo from '../logo.png';
import { connect } from 'react-redux';

const Footer = props => {
	return (
		<footer>
			<div className="inner">
				<div className="logo">
					<img src={logo} alt="Logo" />
				</div>
				<div className="moreInfo">
					<a href="https://awesome-sleep-tracker.netlify.com/" target="_blank" rel="noopener noreferrer">Marketing</a>
					<a href="https://build-week-sleep-tracker-app.github.io/Marketing-page-2/" target="_blank" rel="noopener noreferrer">Marketing 2</a>
				</div>
			</div>
		</footer>
	);
};

export default connect(
  state => ({ isLoggedIn: state.login.isLoggedIn }),
  null
)(Footer);
