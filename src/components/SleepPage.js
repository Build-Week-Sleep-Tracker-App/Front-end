import React from 'react';
import SleepGraphs from './SleepGraphs';
import SleepEntryList from './SleepEntryList';
import SleepEntryFormik from './SleepEntryForm';

const SleepPage = (props) => {
	return (
		<>
			<SleepGraphs />
			<SleepEntryList />
			<SleepEntryFormik />
        </>
	);
}

export default SleepPage;