import React from 'react';
import SleepEntryForm from './components/SleepEntryForm';
import LoginPage from './components/LoginPage';

export default function SleepTracker() {
	return (
		<div className="sleepTracker">
			<SleepEntryForm />
			<LoginPage />
		</div>
	);
}