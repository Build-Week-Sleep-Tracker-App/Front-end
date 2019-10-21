import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(
	// reducers
	combineReducers({
		login: reducers.loginReducer,
		user: reducers.userReducer,
		sleepForm: reducers.sleepFormReducer
	}),
	// local storage ?
	compose(
		// middleware
		applyMiddleware(thunk),
		// redux dev tools
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;