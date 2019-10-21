import React from 'react'
import Login from './Login'
import Register from './Register'
import { connect } from 'react-redux'
import { signUp, login } from '../actions/actionCreators'
import './styles/loginPage.css'

const LoginPage = props => {
  return (
    <div className="forms">
      <Login login={props.login} history={props.history} />
      <Register signUp={props.signUp} />
    </div>
  )
}

export default connect(
  state => state,
  { signUp, login }
)(LoginPage)
