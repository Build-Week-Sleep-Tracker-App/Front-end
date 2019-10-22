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

export const loadState = (keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			serializedState = keys.reduce((serialSt, key) => {
				serialSt[key] = localStorage.getItem('sleep_tracker_' + key);
				return serialSt;
			}, {})
		} else {
			serializedState = localStorage.getItem('sleep_tracker_state');
		}
		if (serializedState === null || Object.values(serializedState).includes(null)) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export const saveState = (state, keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			keys.forEach(key => {
				serializedState = JSON.stringify(state[key])
				localStorage.setItem('sleep_tracker_' + key, serializedState);
			});
		} else {
			serializedState = JSON.stringify(state);
			localStorage.setItem('sleep_tracker_state', serializedState);
		}
	} catch (err) {
		throw new Error('Not able to set local storage: ', err);
	}
}
