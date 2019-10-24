import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import './styles/forms.css';

function Login({ errors, touched }) {
  return (
    <div className="form-container">
      <h1 className="text">Log-IN</h1>
      <Form className="form-group">
        <Field className="input" type="text" name="username" placeholder="Username" />
        <Field className="input" type="password" name="password" placeholder="Password" />
        <button className="button" type="submit">Login</button>
		{touched.username && errors.username && <p>{errors.username}</p>}
		{touched.password && errors.password && <p>{errors.password}</p>}
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, confirmPassword }) {
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