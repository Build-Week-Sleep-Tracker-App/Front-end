import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function Register({ errors, touched }) {
	return (
		<div className="form-column">
			<h1 className="text">Register</h1>
			<Form id="register-form" className="form-group">
				<Field
					className="input"
					type="text"
					name="username"
					placeholder="Username"
					required="required"
				/>
				{touched.username && errors.username && <p>{errors.username}</p>}
				<Field
					className="input"
					type="password"
					name="password"
					placeholder="Password"
					required="required"
				/>
				{touched.password && errors.password && <p>{errors.password}</p>}
				<Field
					className="input"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					required="required"
				/>
				{touched.confirmPassword && errors.confirmPassword && (
					<p>{errors.confirmPassword}</p>
				)}
				<Field
					className="input"
					type="date"
					name="birthdate"
					placeholder="Birthdate"
					pattern="\d{2}-\d{2}-\d{4}"
					required="required"
				/>
				{touched.date && errors.date && <p>{errors.date}</p>}
				<button className="button" type="submit">
					Register
        </button>
			</Form>
		</div>
	);
}

const FormikRegisterForm = withFormik({
	mapPropsToValues({ username, birthdate, password, confirmPassword }) {
		return {
			username: username || '',
			birthdate: birthdate || '',
			password: password || '',
			confirmPassword: confirmPassword || ''
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required('Please enter your username'),
		password: Yup.string().required('Please enter your password').min(6),
		birthdate: Yup.date().required('Please enter your birthdate'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords don\'t match')
	}),

	handleSubmit(values, { resetForm, props }) {
		props.signUp(values);
		resetForm();
	}
})(Register);

export default FormikRegisterForm;
