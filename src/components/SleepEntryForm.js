import React, { useEffect } from 'react'
import { axiosWithAuth } from '../utils';
 
export default function SleepEntryForm (props) {

	const getUsers = () => {
		axiosWithAuth().get('https://sleeptrack.herokuapp.com/api/users')
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);	
		})
	}

	useEffect(() => {
		getUsers();
	})

	return(
		<div>
			<h1>Sleep Entry Form</h1>
			{props.children}
		</div>
	)
}