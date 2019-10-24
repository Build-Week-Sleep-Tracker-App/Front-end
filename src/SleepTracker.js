import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./utils";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SleepPage from "./components/SleepPage";
import MotionTracker from './components/MotionTracker';
/* import Logout from "./components/Logout"; */
import Footer from "./components/Footer";

export default function SleepTracker() {
	return (
		<div className="sleepTracker">
			<Header />
			<Route exact path="/" component={LoginPage} />
			<PrivateRoute path="/sleep" component={SleepPage} />
			{/* <Route path="/logout" component={Logout} /> */}
			<Route path="/tracker" component={MotionTracker} />
			<Footer />
		</div>
	)
}
