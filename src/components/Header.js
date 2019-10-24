import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const Header = ({ isLoggedIn, logout }) => {
	return (
		<header>
			<div className="inner">
				<Navbar variant="dark" expand="sm">
					<Navbar.Brand>
						<NavLink to="/">
							<img
								alt="app-logo"
								src={logo}
								className="d-inline-block align-top"
							/>
						</NavLink>
					</Navbar.Brand>
					<div className="menu">
						<NavLink
							exact
							to="/"
							activeClassName="active">
							Home
						</NavLink>
						<NavLink to="/sleep" activeClassName="active">Dashboard</NavLink>
						{isLoggedIn ? (
							<NavLink
								exact
								to="/"
								onClick={logout}>
								Logout
							</NavLink>
						) : null}
					</div>
				</Navbar>
			</div>
		</header>
	);
};

export default connect(state => ({ isLoggedIn: state.login.isLoggedIn }), actionCreators)(Header);