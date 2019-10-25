import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const SleepEntryForm = ({ setValues, errors, touched, isEditingEntry, user }) => {
	useEffect(() => {
		if (isEditingEntry > 0) {
			let editEntry = user.sleepData.find(entry => entry.id === isEditingEntry);
			editEntry = {
				start: moment(editEntry.start).format('YYYY-MM-DDTHH:mm'),
				end: moment(editEntry.end).format('YYYY-MM-DDTHH:mm'),
				bed_t_rating: editEntry.bed_t_rating + '',
				work_t_rating: editEntry.work_t_rating + '',
				average_rating: editEntry.average_rating + '',
			}
			setValues(editEntry);
			// doesnt update every button click
		}
	}, [isEditingEntry, user, setValues])
	return (
		<section className="sleepEntryForm">
			<h1 className="text">{isEditingEntry > 0 ? 'Edit' : 'Add'} sleep session{isEditingEntry > 0 ? ' #' + isEditingEntry : null}</h1>
			<Form>
				<div className="form-group-cols">
					<div className="form-col">
						<fieldset>
							<legend>How was your mood before going to bed?</legend>
							<Field type="radio" name="bed_t_rating" value="1" component={Radio} required="required" />
							<Field type="radio" name="bed_t_rating" value="2" component={Radio} required="required" />
							<Field type="radio" name="bed_t_rating" value="3" component={Radio} required="required" />
							<Field type="radio" name="bed_t_rating" value="4" component={Radio} required="required" />
							{touched.bed_t_rating && errors.bed_t_rating && <p>{errors.bed_t_rating}</p>}
						</fieldset>
						<fieldset>
							<legend>How was your mood after waking up?</legend>
							<Field type="radio" name="work_t_rating" value="1" component={Radio} required="required" />
							<Field type="radio" name="work_t_rating" value="2" component={Radio} required="required" />
							<Field type="radio" name="work_t_rating" value="3" component={Radio} required="required" />
							<Field type="radio" name="work_t_rating" value="4" component={Radio} required="required" />
							{touched.work_t_rating && errors.work_t_rating && <p>{errors.work_t_rating}</p>}
						</fieldset>
						<fieldset>
							<legend>How was your mood during the day?</legend>
							<Field type="radio" name="average_rating" value="1" component={Radio} required="required" />
							<Field type="radio" name="average_rating" value="2" component={Radio} required="required" />
							<Field type="radio" name="average_rating" value="3" component={Radio} required="required" />
							<Field type="radio" name="average_rating" value="4" component={Radio} required="required" />
							{touched.average_rating && errors.average_rating && <p>{errors.average_rating}</p>}
						</fieldset>
					</div>
					<div className="form-col">
						<fieldset>
							<legend>Start date and time of sleep session:</legend>
							<Field
								className="input"
								type="datetime-local"
								name="start"
								pattern="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}"
								required="required"
							/>
							{touched.start && errors.start && <p>{errors.start}</p>}
						</fieldset>
						<fieldset>
							<legend>End date and time of sleep session:</legend>
							<Field
								className="input"
								type="datetime-local"
								name="end"
								pattern="\d{4}-\d{2}-\d{2}T\d{2}:\d{2}"
								required="required"
							/>
							{touched.end && errors.end && <p>{errors.end}</p>}
						</fieldset>
					</div>
				</div>
				<button className="button" type="submit">Submit</button>
			</Form>
		</section>
	)
}

const dateStart = moment();
const dateEnd = moment().add(7, 'hours');
const SleepEntryFormik = withFormik({
	enableReinitialize: true,
	displayName: 'SleepEntryForm',
	mapPropsToValues({ start, end, bed_t_rating, work_t_rating, average_rating }) {
		return {
			start: (dateStart).format('YYYY-MM-DDTHH:mm'),
			end: (dateEnd).format('YYYY-MM-DDTHH:mm'),
			bed_t_rating: "1",
			work_t_rating: "1",
			average_rating: "1",
		};
	},
	validationSchema: Yup.object().shape({
		start: Yup.date().max(new Date(), 'Invalid start date').required("Please enter the start date and time of this sleep session"),
		end: Yup.date().max(new Date(), 'Invalid end date').when(
			'start',
			(start, schema) => (start && schema.min(start))
		).required("Please enter the end date and time of this sleep session"),
		bed_t_rating: Yup.string().required("Please enter your mood before going to bed"),
		work_t_rating: Yup.string().required("Please enter your mood after waking up"),
		average_rating: Yup.string().required("Please enter your average mood during the day"),
	}),
	handleSubmit(values, { props, resetForm }) {
		if (props.isEditingEntry > 0) {
			props.editSleepEntry({ ...values, id: props.isEditingEntry, userID: props.user.id });
		} else {
			props.addSleepEntry({ ...values, userID: props.user.id });
		}
		resetForm();
	}
})(SleepEntryForm)

export default connect(state => state, actionCreators)(SleepEntryFormik);

const Radio = ({ field, type, form, value }) => {
	const icons = ['icon-sad', 'icon-meh', 'icon-happy', 'icon-very-happy'];
	return (
		<label htmlFor={field.name + '_' + value}>
			<input
				id={field.name + '_' + value}
				className="input-radio"
				name={field.name}
				type={type}
				value={value}
				checked={form.values[field.name] === value}
				onChange={field.onChange}
				onBlur={field.onBlur}
			/>
			<i className={icons[value - 1]}></i>
		</label>
	);
}