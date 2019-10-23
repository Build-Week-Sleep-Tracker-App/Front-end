import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils";
import LoginPage from "./components/LoginPage";
import SleepPage from "./components/SleepPage";
import Header from './components/Header';

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/sleep" component={SleepPage} />
      </Switch>
    </div>
  )
}
