import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SleepPage from "./components/SleepPage";
import Logout from "./components/Logout";
import Footer from "./components/Footer";

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/sleep" component={SleepPage} />
        <Route path="/logout" component={Logout} />
      </Switch>
			<Footer />
    </div>
  )
}
