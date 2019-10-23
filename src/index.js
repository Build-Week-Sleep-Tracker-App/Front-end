import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import SleepTracker from './SleepTracker'
import store from './store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <SleepTracker />
    </Router>
  </Provider>,
  document.getElementById('root')
)
