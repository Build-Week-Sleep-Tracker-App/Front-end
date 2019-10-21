import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'

const Header = () => (
  <div>
    <Navbar bg="dark" variant="dark" expand="md">
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
        <LinkContainer to="/">
          <Button variant="link">Login</Button>
        </LinkContainer>
        <LinkContainer to="/sleepentryform">
          <Button variant="link">Sleep Entry Form</Button>
        </LinkContainer>
        <LinkContainer to="/logout">
          <Button variant="link">Logout</Button>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
