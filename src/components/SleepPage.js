import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import SleepGraphs from './SleepGraphs';
import SleepEntryList from './SleepEntryList';
import SleepEntryFormik from './SleepEntryForm';

const SleepPage = ({ getUser }) => {
	useEffect(() => {
		let user = localStorage.getItem('sleep_tracker_user');
		user = user ? JSON.parse(user) : user;
		if (!user || !user.id) {
			getUser();
		}
	}, [])
	return (
		<>
			<SleepGraphs />
			<SleepEntryList />
			<SleepEntryFormik /> 
        </>
	);
}

export default connect(state => state, actionCreators)(SleepPage);