import React from 'react'
import { withFormik, Form, Field } from 'formik';

function Login (props) {
	console.log(props)
	return(
		<div>
			<h1>Login</h1>
			 <Form>
				 <Field type="text" name="username" placeholder="Username" />
				 <Field type="password" name="password" placeholder="Password" />
				 <button type="submit">Login</button>
			 </Form>
		</div>
	)
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ username, password }) {
	  return {
		username: username || "",
		password: password || ""
	  };
	},
  
	handleSubmit(values, { props }) {
	  console.log(values);
	  props.login(values, props.history)
	}
  })(Login);

export default FormikLoginForm;