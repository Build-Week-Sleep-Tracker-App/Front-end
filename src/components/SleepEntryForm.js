import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';

const SleepEntryForm = ({ sleepForm, addSleepEntry, changeSleepEntryForm, getUser }) => {
	const addEntry = (e) => {
		e.preventDefault();
		addSleepEntry(sleepForm);
	}
	const onInputChange = (e) => {
		const isDate = e.target.name === 'start' || e.target.name === 'end';
		console.log(isDate ? moment(e.target.value).format('DD-MM-YYYYTHH:mm') : e.target.value)
		changeSleepEntryForm({
			[e.target.name]: e.target.value,
		});
	}
	useEffect(() => {
		getUser();
	}, [])
	return (
		<form onSubmit={addEntry}>
			<label htmlFor="">start</label>
			<br />
			<input
				name="start"
				type="datetime-local"
				value={sleepForm.start ? moment(sleepForm.start).format('YYYY-MM-DDTHH:mm') : sleepForm.start}
				onChange={onInputChange}
				pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}T[0-9]{2}:[0-9]{2}"
			/>
			<br />
			<label htmlFor="">end</label>
			<br />
			<input
				name="end"
				type="datetime-local"
				value={sleepForm.end ? moment(sleepForm.end).format('YYYY-MM-DDTHH:mm') : sleepForm.end}
				onChange={onInputChange}
				pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}T[0-9]{2}:[0-9]{2}"
			/>
			<br />
			<label htmlFor="">Emoji1</label>
			<br />
			<input name="bed_t_tracking" type="radio" value={1} onChange={onInputChange} checked={sleepForm.bed_t_tracking === 1 ? 'checked' : false} />
			<input name="bed_t_tracking" type="radio" value={2} onChange={onInputChange} checked={sleepForm.bed_t_tracking === 2 ? 'checked' : false} />
			<input name="bed_t_tracking" type="radio" value={3} onChange={onInputChange} checked={sleepForm.bed_t_tracking === 3 ? 'checked' : false} />
			<input name="bed_t_tracking" type="radio" value={4} onChange={onInputChange} checked={sleepForm.bed_t_tracking === 4 ? 'checked' : false} />
			<br />
			<label htmlFor="">Emoji2</label>
			<br />
			<input name="work_t_tracking" type="radio" value={1} onChange={onInputChange} checked={sleepForm.work_t_tracking === 1 ? 'checked' : false} />
			<input name="work_t_tracking" type="radio" value={2} onChange={onInputChange} checked={sleepForm.work_t_tracking === 2 ? 'checked' : false} />
			<input name="work_t_tracking" type="radio" value={3} onChange={onInputChange} checked={sleepForm.work_t_tracking === 3 ? 'checked' : false} />
			<input name="work_t_tracking" type="radio" value={4} onChange={onInputChange} checked={sleepForm.work_t_tracking === 4 ? 'checked' : false} />
			<br />
			<label htmlFor="">Emoji3</label>
			<br />
			<input name="average_rating" type="radio" value={1} onChange={onInputChange} checked={sleepForm.average_rating === 1 ? 'checked' : false} />
			<input name="average_rating" type="radio" value={2} onChange={onInputChange} checked={sleepForm.average_rating === 2 ? 'checked' : false} />
			<input name="average_rating" type="radio" value={3} onChange={onInputChange} checked={sleepForm.average_rating === 3 ? 'checked' : false} />
			<input name="average_rating" type="radio" value={4} onChange={onInputChange} checked={sleepForm.average_rating === 4 ? 'checked' : false} />
			<br />
			<button type="submit">Submit</button>
		</form>
	)
}

export default connect(state => state, actionCreators)(SleepEntryForm)
