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
        <button type="submit">Login</button>
		{touched.username && errors.username && <p>{errors.username}</p>}
		{touched.password && errors.password && <p>{errors.password}</p>}
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, confirmPassword}) {
    return {
      username: username || "",
	  password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
	  username: Yup.string().required("Please enter your username"),
	  password: Yup.string().required("Please enter your password"),
  }),	

  handleSubmit(values, { props, resetForm }) {
    props.login(values, props.history);
    resetForm();
  }
})(Login);

export default FormikLoginForm;
