import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';

const SleepEntryForm = ({ sleepForm, addSleepEntry, changeSleepEntryForm }) => {
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
	return (
		<form onSubmit={addEntry}>
			<label htmlFor="">start</label>
			<br/>
			<input
				name="start"
				type="datetime-local"
				value={sleepForm.start ? moment(sleepForm.start).format('YYYY-MM-DDTHH:mm') : sleepForm.start}
				onChange={onInputChange}
				pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}T[0-9]{2}:[0-9]{2}"
			/>
			<br/>
			<label htmlFor="">end</label>
			<br/>
			<input
				name="end"
				type="datetime-local"
				value={sleepForm.end ? moment(sleepForm.end).format('YYYY-MM-DDTHH:mm') : sleepForm.end}
				onChange={onInputChange}
				pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}T[0-9]{2}:[0-9]{2}"
			/>
			<br/>
			<label htmlFor="">Emoji1</label>
			<br/>
			<input name="bed_t_tracking" type="radio" value={1} onChange={onInputChange} />
			<input name="bed_t_tracking" type="radio" value={2} onChange={onInputChange} />
			<input name="bed_t_tracking" type="radio" value={3} onChange={onInputChange} />
			<input name="bed_t_tracking" type="radio" value={4} onChange={onInputChange} />
			<br/>
			<label htmlFor="">Emoji2</label>
			<br/>
			<input name="work_t_tracking" type="radio" value={1} onChange={onInputChange} />
			<input name="work_t_tracking" type="radio" value={2} onChange={onInputChange} />
			<input name="work_t_tracking" type="radio" value={3} onChange={onInputChange} />
			<input name="work_t_tracking" type="radio" value={4} onChange={onInputChange} />
			<br/>
			<label htmlFor="">Emoji3</label>
			<br/>
			<input name="average_rating" type="radio" value={1} onChange={onInputChange} />
			<input name="average_rating" type="radio" value={2} onChange={onInputChange} />
			<input name="average_rating" type="radio" value={3} onChange={onInputChange} />
			<input name="average_rating" type="radio" value={4} onChange={onInputChange} />
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default connect(state => state, actionCreators)(SleepEntryForm)