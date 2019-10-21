import axios from "axios";
import React from "react";
import { Route, Redirect } from "react-router-dom";

export function axiosWithAuth() {
	const token = localStorage.getItem("sleep_tracker_token");
	return axios.create({
		headers: {
			"Content-Type": "application/json",
			Authorization: `${token}`
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
