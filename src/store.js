import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { loadState, saveState } from './utils';
import throttle from 'lodash/throttle';

const persistedStateKeysInLocalStorage = ['user'];
const store = createStore(
	// reducers
	combineReducers({
		login: reducers.loginReducer,
		register: reducers.signUpReducer,
		user: reducers.userReducer,
		isEditingEntry: reducers.editEntryReducer,
		tracking: reducers.motionTrackerReducer
	}),
	// local storage
	loadState(persistedStateKeysInLocalStorage),
	// middleware
	compose(
		applyMiddleware(thunk),
		// redux dev tools
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

store.subscribe(throttle(() => {
	saveState(store.getState(), persistedStateKeysInLocalStorage)
}, 1000));

export default store;