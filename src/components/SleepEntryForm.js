import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const SleepEntryForm = ({ errors, touched, getUser }) => {
	useEffect(() => {
		getUser();
	}, [])
	return (
		<Form>
			<Field type="datetime-local" name="start" />
			{touched.start && errors.start && <p>{errors.start}</p>}
			<Field type="datetime-local" name="end" />
			{touched.end && errors.end && <p>{errors.end}</p>}
			<label>
				How was your mood before going to bed?
				<Field type="radio" name="bed_t_tracking" value={1} />
				<Field type="radio" name="bed_t_tracking" value={2} />
				<Field type="radio" name="bed_t_tracking" value={3} />
				<Field type="radio" name="bed_t_tracking" value={4} />
			</label>
			{touched.bed_t_tracking && errors.bed_t_tracking && <p>{errors.bed_t_tracking}</p>}
			<label>
				How was your mood after waking up?
				<Field type="radio" name="work_t_tracking" value={1} />
				<Field type="radio" name="work_t_tracking" value={2} />
				<Field type="radio" name="work_t_tracking" value={3} />
				<Field type="radio" name="work_t_tracking" value={4} />
			</label>
			{touched.work_t_tracking && errors.work_t_tracking && <p>{errors.work_t_tracking}</p>}
			<label>
				How was your mood during the day?
				<Field type="radio" name="average_rating" value={1} />
				<Field type="radio" name="average_rating" value={2} />
				<Field type="radio" name="average_rating" value={3} />
				<Field type="radio" name="average_rating" value={4} />
			</label>
			{touched.average_rating && errors.average_rating && <p>{errors.average_rating}</p>}
			<button type="submit">Submit entry</button>
		</Form>
	)
}

const dateStart = moment().format('YYYY-MM-DDTHH:mm');
const dateEnd = moment().add(7, 'hours').format('YYYY-MM-DDTHH:mm');
const SleepEntryFormik = withFormik({
	mapPropsToValues({ start, end, bed_t_tracking, work_t_tracking, average_rating }) {
		return {
			start: start || dateStart,
			end: end || dateEnd,
			bed_t_tracking: bed_t_tracking || 1,
			work_t_tracking: work_t_tracking || 1,
			average_rating: average_rating || 1,
		};
	},
	validationSchema: Yup.object().shape({
		start: Yup.date().required("Please enter the start date and time of this sleep session"),
		end: Yup.date().required("Please enter the end date and time of this sleep session"),
		bed_t_tracking: Yup.number().min(1).max(4).required("Please enter your mood before going to bed"),
		work_t_tracking: Yup.number().min(1).max(4).required("Please enter your mood after waking up"),
		average_rating: Yup.number().min(1).max(4).required("Please enter your average mood during the day"),
	}),
	handleSubmit(values, { props, resetForm }) {
		console.log(props);
		props.addSleepEntry(values);
		resetForm();
	},
	displayName: 'SleepEntryForm'
})(SleepEntryForm)

export default connect(state => state, actionCreators)(SleepEntryFormik);
