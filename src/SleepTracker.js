import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

export default function SleepTracker() {
	return (
		<div className="sleepTracker">
			<Login />
			<Register />
		</div>
	);
}