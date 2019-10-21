import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { PrivateRoute } from "./utils/index";
import SleepEntryForm from "./components/SleepEntryForm";
import SleepGraph from "./components/SleepGraph";

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/sleepentryform" component={SleepEntryForm} />
      <PrivateRoute path="/sleepgraph" component={SleepGraph} />
    </div>
  );
}
