import React from 'react'
import { withFormik, Form, Field } from 'formik';

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
  
	handleSubmit(values) {
	  console.log(values);
	}
  })(Register);

export default FormikRegisterForm;