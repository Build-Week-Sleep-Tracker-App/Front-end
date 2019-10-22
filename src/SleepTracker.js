import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import { PrivateRoute } from './utils/index'
import SleepEntryForm from './components/SleepEntryForm'
import Header from './components/Header'
import Logout from './components/Logout'

export default function SleepTracker() {
  return (
    <div className="sleepTracker">
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/sleepentryform" component={SleepEntryForm} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </div>
  )
}
