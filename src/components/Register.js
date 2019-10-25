import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
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
					autoComplete="username"
				/>
				{touched.username && errors.username && <p>{errors.username}</p>}
				<Field
					className="input"
					type="password"
					name="password"
					placeholder="Password"
					required="required"
					autoComplete="new-password"
				/>
				{touched.password && errors.password && <p>{errors.password}</p>}
				<Field
					className="input"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					required="required"
					autoComplete="new-password"
				/>
				{touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				<Field
					className="input"
					type="date"
					name="birthdate"
					placeholder="Birthdate"
					pattern="\d{2}-\d{2}-\d{4}"
					required="required"
				/>
				{touched.birthdate && errors.birthdate && <p>{errors.birthdate}</p>}
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
		birthdate: Yup.date().max(new Date(), 'Invalid birthdate').required('Please enter your birthdate'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords don\'t match')
	}),

	handleSubmit(values, { resetForm, props }) {
		props.signUp(values);
		props.login({ username: values.username, password: values.password });
		resetForm();
	}
})(Register);

export default connect(state => state, actionCreators)(FormikRegisterForm);
