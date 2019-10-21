import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
const store = createStore(
	// reducers
	combineReducers({
		login: reducers.loginReducer
	}),
	// local storage ?
	// middleware
	applyMiddleware(thunk),
	// redux dev tools
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;