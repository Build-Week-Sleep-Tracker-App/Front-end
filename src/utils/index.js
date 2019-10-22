import axios from "axios";
import React from "react";
import { Route, Redirect } from "react-router-dom";

export function axiosWithAuth() {
	const token = localStorage.getItem("sleep_tracker_token");
	return axios.create({
		baseURL: 'https://sleeptrack.herokuapp.com/',
		headers: {
			"Content-Type": "application/json",
			"authorize": `${token}`
		}
	});
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem("sleep_tracker_token") ? (
				<Component {...props} />
			) : (
					<Redirect to="/" />
				)
		}
	/>
);

export const getUserID = () => {
	const userID = localStorage.getItem('sleep_tracker_user_id');
	return userID ? Number(userID) : false;
}