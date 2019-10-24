import * as types from '../actions/actionTypes';
import { getUserID } from '../utils';

const initialSignupState = {
	isSignedUp: false
};

export const signUpReducer = (state = initialSignupState, action) => {
	switch (action.type) {
		case types.SIGNUP:
			return {
				...state,
				isSignedUp: true
			};
		default:
			return state;
	}
};

const initialLoginState = {
	isLoggingIn: false,
	isLoggedIn: (getUserID() > 0),
	userID: null
};

export const loginReducer = (state = initialLoginState, action) => {
	switch (action.type) {
		case types.LOGIN_START:
			return {
				...state,
				isLoggingIn: true
			};
		case types.LOGIN:
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: true,
				userID: action.payload
			};
		case types.LOGOUT:
			return initialLoginState;
		default:
			return state;
	}
};

let sleepEntryID = localStorage.getItem('sleep_tracker_user');
if (sleepEntryID === null) {
	sleepEntryID = 0;
} else {
	sleepEntryID = JSON.parse(sleepEntryID).sleepData;
	if (sleepEntryID.length > 0) {
		sleepEntryID = sleepEntryID[sleepEntryID.length - 1].id;
	} else {
		sleepEntryID = 0;
	}
}

const initialUserState = {
	id: getUserID(),
	username: '',
	role: '',
	birthdate: '',
	sleepData: []
};
const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case types.LOGOUT:
			return initialUserState;
		case types.LOGIN:
			return {
				id: getUserID(),
				username: '',
				role: '',
				birthdate: '',
				sleepData: []
			}
		case types.SET_USER:
			return {
				...state,
				...action.payload
			};
		case types.ADD_SLEEP_ENTRY:
			sleepEntryID++;
			console.log('sleepEntryID', sleepEntryID);
			return {
				...state,
				sleepData: state.sleepData.concat({
					...action.payload,
					id: sleepEntryID,
					userID: state.id
				})
			};
		case types.EDIT_SLEEP_ENTRY:
			return {
				...state,
				sleepData: state.sleepData.map(entry => {
					if (entry.id === action.payload.id) return action.payload;
					return entry;
				})
			};
		case types.DELETE_SLEEP_ENTRY:
			return {
				...state,
				sleepData: state.sleepData.filter(entry => entry.id !== action.payload)
			};
		default:
			return state;
	}
};

const editEntryReducer = (state = 0, action) => {
	switch (action.type) {
		case types.START_EDIT_SLEEP_ENTRY:
			return action.payload.id;
		case types.LOGOUT:
		case types.ADD_SLEEP_ENTRY:
		case types.EDIT_SLEEP_ENTRY:
		case types.DELETE_SLEEP_ENTRY:
			return 0;
		default:
			return state;
	}
};

export default {
	initialSignupState,
	signUpReducer,

	initialLoginState,
	loginReducer,

	initialUserState,
	userReducer,

	editEntryReducer
};
