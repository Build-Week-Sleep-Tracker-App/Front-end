import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const SleepEntryForm = ({ setValues, errors, touched, isEditingEntry, user, getUser }) => {
	useEffect(() => {
		if (!user.id) {
			getUser();
		}
		if (isEditingEntry > 0) {
			let editEntry = user.sleepData.find(entry => entry.id === isEditingEntry);
			editEntry = {
				start: moment(editEntry.start).format('YYYY-MM-DDTHH:mm'),
				end: moment(editEntry.end).format('YYYY-MM-DDTHH:mm'),
				bed_t_tracking: Number(editEntry.bed_t_tracking),
				work_t_tracking: Number(editEntry.work_t_tracking),
				average_rating: Number(editEntry.average_rating),
			}
			setValues(editEntry);
			// doesnt update every button click
		}
	}, [getUser, isEditingEntry])
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

const dateStart = moment();
const dateEnd = moment().add(7, 'hours');
const SleepEntryFormik = withFormik({
	enableReinitialize: true,
	displayName: 'SleepEntryForm',
	mapPropsToValues({ start, end, bed_t_tracking, work_t_tracking, average_rating }) {
		console.log("mapPropsToValues")
		return {
			start: (moment(start) || dateStart).format('YYYY-MM-DDTHH:mm'),
			end: (moment(end) || dateEnd).format('YYYY-MM-DDTHH:mm'),
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
	handleSubmit(values, { props, resetForm, setValues }) {
		console.log(props);
		if (props.isEditing > 0) {
			props.editSleepEntry(values);
		} else {
			props.addSleepEntry(values);
		}
		resetForm();
	}
})(SleepEntryForm)

export default connect(state => state, actionCreators)(SleepEntryFormik);
