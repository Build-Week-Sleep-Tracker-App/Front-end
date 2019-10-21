import React from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from 'react-redux'
import { signup, login } from '../actions/actionCreators'

const LoginPage = ( props ) => {
    return (
        <div>
            <Login login={props.login}/>
            <Register signup={props.signup}/>
        </div>
    );
}
 
export default connect(state=>state, { signup, login })(LoginPage);