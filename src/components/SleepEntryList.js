import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const SleepEntryList = ({ user, isEditingEntry, startEditSleepEntry, deleteSleepEntry }) => {
	const onEditEntry = entry => e => {
		// todo: auto scroll up to form
		startEditSleepEntry(entry);
	};
	const onDeleteEntry = id => e => {
		deleteSleepEntry(id);
	};
	const scoreToIcon = (score) => {
		const icons = ['icon-sad', 'icon-meh', 'icon-happy', 'icon-very-happy'];
		return <i className={icons[score - 1]}></i>
	}
	const toggleOverlay = e => {
		let target = e.target;
		let targetClassList = Array.from(target.classList);
		if(targetClassList.includes('sleepEntry')) {
			targetClassList.toggle('clicked');
		} else {
			while(!targetClassList.includes('sleepEntry')) {
				target = target.parentElement;
				targetClassList = Array.from(target.classList);
			}
			target.classList.toggle('clicked');
		}
	}
	return (
		<section className="sleepEntryListSection">
			<h1 className="text">Your sleep sessions</h1>
			<div className="sleepEntryList">
				{user.sleepData.length ? user.sleepData.map(entry => (
					<div key={entry.id} className={`sleepEntry${isEditingEntry === entry.id ? ' editing' : ''}`} onClick={toggleOverlay}>
						<div className="entryInfo">
							<span>Started at</span>
							<span>{moment(entry.start).format('HH:mm DD/MM/YYYY')}</span>
						</div>
						<div className="entryInfo">
							<span>Ended at</span>
							<span>{moment(entry.end).format('HH:mm DD/MM/YYYY')}</span>
						</div>
						<div className="entryInfo">
							<span>Mood before sleep</span>
							<span>{scoreToIcon(entry.bed_t_rating)}</span>
						</div>
						<div className="entryInfo">
							<span>Mood after waking up</span>
							<span>{scoreToIcon(entry.work_t_rating)}</span>
						</div>
						<div className="entryInfo">
							<span>Mood during day</span>
							<span>{scoreToIcon(entry.average_rating)}</span>
						</div>
						<div className="overlay">
							<button onClick={onEditEntry(entry)}><i className="icon-edit"></i></button>
							<button onClick={onDeleteEntry(entry.id)}><i className="icon-delete"></i></button>
						</div>
					</div>
				)) : <p className="alignWithHeader">Not enough user data</p>}
			</div>
		</section>
	);
};

export default connect(
	state => state,
	actionCreators
)(SleepEntryList);
