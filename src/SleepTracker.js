import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { PrivateRoute } from "./utils/index";
import SleepEntryForm from "./components/SleepEntryForm";

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/sleepentryform" component={SleepEntryForm} />
    </div>
  );
}
