import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import moment from 'moment';

const SleepEntryForm = ({ sleepForm, addSleepEntry, changeSleepEntryForm }) => {
	const addEntry = (e) => {
		e.preventDefault();
		const form = Object.values(e.target).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {});
		addSleepEntry(form);
	}
	const onInputChange = (e) => {
		const isDate = e.target.name === 'start' || e.target.name === 'end';
		changeSleepEntryForm({
			[e.target.name]: (isDate ? moment(e.target.value).format('DD/MM/YYYY HH:mm') : e.target.value),
		})
	}
	return(
		<form onSubmit={addEntry}>
			<label htmlFor="">start</label>
			<br/>
			<input
			name="start"
			type="datetime-local"
			value={moment(sleepForm.start).format('YYYY/MM/DDTHH:mm')}
			onChange={onInputChange}
			/>
			<br/>
			<label htmlFor="">end</label>
			<br/>
			<input
			name="end"
			type="datetime-local"
			value={moment(sleepForm.end).format('YYYY/MM/DDTHH:mm')}
			onChange={onInputChange}
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
			<input name="average_rating" type="radio" value={1} onChange={onInputChange}/>
			<input name="average_rating" type="radio" value={2} onChange={onInputChange} />
			<input name="average_rating" type="radio" value={3} onChange={onInputChange} />
			<input name="average_rating" type="radio" value={4} onChange={onInputChange} />
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default connect(state => state, actionCreators)(SleepEntryForm)