import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import SleepGraphs from './SleepGraphs';
import SleepEntryList from './SleepEntryList';
import SleepEntryFormik from './SleepEntryForm';
import SleepRecommendation from './SleepRecommendation';

const SleepPage = ({ getUser }) => {
	useEffect(() => {
		getUser();
	}, [getUser])
	return (
		<main className="inner">
			<SleepGraphs />
			<SleepRecommendation />
			<SleepEntryFormik />
			<SleepEntryList />
		</main>
	);
}

export default connect(state => state, actionCreators)(SleepPage);