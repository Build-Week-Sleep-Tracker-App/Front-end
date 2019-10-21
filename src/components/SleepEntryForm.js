import React from 'react'
import { connect } from 'react-redux';
 
 function SleepEntryForm (props) {
	console.log(props)
	return(
		<div>
			<h1>Sleep Entry Form</h1>
			{props.children}
		</div>
	)
}

export default connect(state => state)(SleepEntryForm)