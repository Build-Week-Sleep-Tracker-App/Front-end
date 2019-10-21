import React from 'react';
import SleepEntryForm from './components/SleepEntryForm';
import Login from './components/Login';
import Register from './components/Register';

export default function SleepTracker() {
	return (
		<div className="sleepTracker">
			<SleepEntryForm />
			<Login />
			<Register />
		</div>
	);
}