import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'thunk';
import reducers from './reducers';
import SleepTracker from './SleepTracker';
import './index.css';


ReactDOM.render(
	<Provider store={
		createStore(
			// reducers
			combineReducers({
				login: reducers.loginReducer
			}),
			// local storage ?
			// middleware
			applyMiddleware(thunk),
			// redux dev tools
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	}>
		<Router>
			<SleepTracker />
		</Router>
	</Provider>,
	document.getElementById('root')
);