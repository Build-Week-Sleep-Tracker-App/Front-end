import React from 'react'
import { withFormik, Form, Field } from 'formik';
import { signUp } from '../actions/actionCreators'
import { connect } from 'react-redux';

function Register (props) {
	return(
		<div>
			<h1>Register</h1>
			<Form>
				<Field type="text" name="username" placeholder ="username"/>
				<Field type="password" name="password" placeholder="password" />
				<Field type="date" name="birthdate" placeholder="birthdate" />
				<button type="submit">Register</button>
			</Form>
		</div>
	)
}


const FormikRegisterForm = withFormik({
	mapPropsToValues({ username, birthdate, password }) {
	  return {
		username: username || "",
		birthdate: birthdate || "",
		password: password || ""
	  };
	},
  
	handleSubmit(values, { props }) {
	  console.log(values);
	  props.signUp(values)
	}
  })(Register);

export default connect(state => state, { signUp } )(FormikRegisterForm);