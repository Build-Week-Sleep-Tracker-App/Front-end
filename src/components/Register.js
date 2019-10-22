import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles/forms.css';

function Register({ errors, touched }) {
  return (
    <div className="form-container">
      <h1 className="text">Register</h1>
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
          type="date"
          name="birthdate"
          placeholder="Birthdate"
        />
        <button className="button" type="submit">
          Register
        </button>
        {touched.username && errors.username && <p>{errors.username}</p>}
        {touched.password && errors.password && <p>{errors.password}</p>}
        {touched.date && errors.date && <p>{errors.date}</p>}
      </Form>
    </div>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, birthdate, password }) {
    return {
      username: username || '',
      birthdate: birthdate || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is a required field'),
    password: Yup.string()
      .required('Password is a required field')
      .min(6),
    birthdate: Yup.date().required('Birthdate is a required field')
  }),

  handleSubmit(values, { props }) {
    console.log(props);
    props.signUp(values);
  }
})(Register);

export default FormikRegisterForm;
