import React from "react";
import { withFormik, Form, Field } from "formik";

function Register(props) {
  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        <Field type="password" name="password" placeholder="password" />
        <Field type="date" name="birthdate" placeholder="birthdate" />
        <button type="submit">Register</button>
      </Form>
    </div>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, birthdate, password}) {
    return {
      username: username || "",
      birthdate: birthdate || "",
	  password: password || "",
	  // currently this is hardcoded to admin so users will have full permissions, should default to "user"
	  role: "admin",	
    };
  },

  handleSubmit(values, { props }) {
    console.log(values);
    props.signup(values);
  }
})(Register);

export default FormikRegisterForm;
