import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { connect } from 'react-redux';
import { logout } from '../actions/actionCreators';

const Header = props => {
	const onLogoutClick = e => {
		props.dispatch(logout());
	};
	return (
		<header>
			<div className="inner">
				<Navbar variant="dark" expand="sm">
					<Navbar.Brand>
						<NavLink to="/">
							<img
								alt="app-logo"
								src={logo}
								width="80"
								height="80"
								className="d-inline-block align-top"
							/>
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<NavLink
							exact
							to="/"
							activeClassName="active">
							Home
						</NavLink>
						<NavLink to="/sleep" activeClassName="active">Dashboard</NavLink>
						{props.isLoggedIn ? (
							<NavLink
								to="/logout"
								activeClassName="active"
								onClick={onLogoutClick}>
								Logout
							</NavLink>
						) : null}
					</Navbar.Collapse>
				</Navbar>
			</div>
		</header>
	);
};

export default connect(
	state => ({ isLoggedIn: state.login.isLoggedIn }),
	null
)(Header);