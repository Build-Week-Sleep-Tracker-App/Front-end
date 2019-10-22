import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles/forms.css';

function Login({ errors, touched }) {
  return (
    <div className="form-container">
      <h1 className="text">Login</h1>
      <Form className="form-group">
        <Field
          className="input"
          type="text"
          name="username"
          placeholder="Username"
        />
        <Field
          className="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Field
          className="input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button className="button" type="submit">
          Login
        </button>
        {touched.username && errors.username && <p>{errors.username}</p>}
        {touched.password && errors.password && <p>{errors.password}</p>}
        {touched.confirmPassword && errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
      </Form>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, confirmPassword }) {
    return {
      username: username || '',
      password: password || '',
      confirmPassword: confirmPassword || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter your password'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    )
  }),

  handleSubmit(values, { props }) {
    props.login(values, props.history);
  }
})(Login);

export default FormikLoginForm;
