import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import { connect } from 'react-redux'
import { logout } from '../actions/actionCreators'

const Header = props => {
  const onLogoutClick = e => {
    props.dispatch(logout())
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand>
          <NavLink to="/">
            <img
              alt="app-logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'  '}Sleep Tracker
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer to="/sleepentryform">
            <Button variant="link">Sleep Entry Form</Button>
          </LinkContainer>
          {props.isLoggedIn ? (
            <LinkContainer to="/logout">
              <Button onClick={onLogoutClick} variant="link">
                Logout
              </Button>
            </LinkContainer>
          ) : (
            <LinkContainer to="/">
              <Button variant="link">Login</Button>
            </LinkContainer>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default connect(
  state => ({ isLoggedIn: state.login.isLoggedIn }),
  null
)(Header)
