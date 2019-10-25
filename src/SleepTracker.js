import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./utils";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SleepPage from "./components/SleepPage";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function SleepTracker({ isLoading }) {
	return (
		<div className="sleepTracker">
			<Header />
			<Route exact path="/" component={LoginPage} />
			<PrivateRoute path="/sleep" component={SleepPage} />
			{ isLoading ? <Loading /> : null}
			<Footer />
		</div>
	)
}

export default connect(state => state, null)(SleepTracker)