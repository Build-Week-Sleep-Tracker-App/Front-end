import React from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from 'yup';

function Login({ errors, touched}) {
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
		<Field type="password" name="confirmPassword" placeholder="Confirm Password" />
        <button type="submit">Login</button>
		{touched.username && errors.username && <p>{errors.username}</p>}
		{touched.password && errors.password && <p>{errors.password}</p>}
		{touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, confirmPassword}) {
    return {
      username: username || "",
	  password: password || "",
	  confirmPassword: confirmPassword || "",
    };
  },

  validationSchema: Yup.object().shape({
	  username: Yup.string().required("Please enter your username"),
	  password: Yup.string().required("Please enter your password"),
	  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  }),	

  handleSubmit(values, { props }) {
    props.login(values, props.history);
  }
})(Login);

export default FormikLoginForm;
