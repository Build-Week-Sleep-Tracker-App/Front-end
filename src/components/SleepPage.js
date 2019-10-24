import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import SleepGraphs from './SleepGraphs';
import SleepEntryList from './SleepEntryList';
import SleepEntryFormik from './SleepEntryForm';

const SleepPage = ({ getUser }) => {
	useEffect(() => {
		let userid = localStorage.getItem('sleep_tracker_user_id');
		if (!userid) {
			getUser();
		}
	}, [getUser])
	return (
		<main className="inner">
			<SleepGraphs />
			<SleepEntryFormik />
			<SleepEntryList />
		</main>
	);
}

export default connect(state => state, actionCreators)(SleepPage);