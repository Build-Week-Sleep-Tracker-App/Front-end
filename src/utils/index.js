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
	return userID ? Number(userID) : 0;
}

export const loadState = (keys) => {
	try {
		let serializedState = null;
		let err = false;
		serializedState = keys.reduce((serialSt, key) => {
			serialSt[key] = localStorage.getItem('sleep_tracker_' + key);
			if(serialSt[key] !== null) {
				serialSt[key] = JSON.parse(serialSt[key]);
			} else {
				err = true;
			}
			return serialSt;
		}, {})
		return serializedState === null || err ? undefined : serializedState;
	} catch (err) {
		console.error('loadState:', err);
		return undefined;
	}
}

export const saveState = (state, keys) => {
	try {
		let serializedState = null;
		if (keys.length > 0) {
			keys.forEach(key => {
				serializedState = JSON.stringify(state[key]);
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
