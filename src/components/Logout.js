import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Logout = (props) => {
	useEffect(() => {
		setTimeout(() => {
			props.history.push('/');
		}, 10000);
	}, [])
	return (
		<div className="logout-container">
			<p>You have been logged out</p>
			<p>You will be redirected to the homepage in 10 seconds</p>
			<p>Or click <Link to="/">here</Link> to go now</p>
		</div>
	);
};

export default Logout;
