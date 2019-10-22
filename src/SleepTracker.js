import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./utils";
import LoginPage from "./components/LoginPage";
import SleepPage from "./components/SleepPage";

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/sleep" component={SleepPage} />
    </div>
  );
}
