import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const SleepRecommendation = ({ user }) => {
	const totalTimeInBed = user.sleepData.reduce((hours, entry) => hours + entry.hours, 0);
	let optimalMoodAfterGivenHours = user.sleepData.reduce((moodAverages, entry) => {
		return [...moodAverages, {
			id: entry.id,
			hours: entry.hours,
			average_mood: (Number(entry.bed_t_rating) + Number(entry.work_t_rating) + Number(entry.average_rating)) / 3,
			moodPerHour: ((Number(entry.bed_t_rating) + Number(entry.work_t_rating) + Number(entry.average_rating)) / 3) / entry.hours
		}]
	}, []);
	optimalMoodAfterGivenHours = optimalMoodAfterGivenHours.reduce((entryMax, entry) => (entry.average_mood > entryMax.average_mood ? entry : entryMax), { average_mood: 0, moodPerHour: 0 })
	console.log({
		totalTimeInBed,
		optimalMoodAfterGivenHours
	})
	return (
		<div className="recommendation">
			<h1 className="text">Our recommendation</h1>
			<p className="alignWithHeader">Your mood score tends to be highest when you sleep around {optimalMoodAfterGivenHours.hours} hours!</p>
		</div>
	);
}

export default connect(state => state, actionCreators)(SleepRecommendation);