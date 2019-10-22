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
	isLoggedIn: false,
	userID: null
}

export const loginReducer = (state = initialLoginState, action) => {
	switch (action.type) {
		case types.LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
			}
		case types.LOGIN:
			return {
				...state,
				isLoggingIn: false,
				isLoggedIn: true,
				userID: action.payload,
			};
		default:
			return state;
	}
};

let sleepEntryID = 0;
const initialUserState = {
	"id": "",
	"username": "",
	"role": "",
	"birthdate": "",
	"sleepData": []
};
const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case types.SET_USER:
			return {
				...state,
				...action.payload,
				id: getUserID(),
			};
		case types.ADD_SLEEP_ENTRY:
			sleepEntryID++;
			console.log('addSleepEntry request', {
				...action.payload,
				id: sleepEntryID,
				userID: getUserID()
			});
			return {
				...state,
				sleepData: [
					...state.sleepData, 
					{
						id: sleepEntryID,
						userID: getUserID(),
						...action.payload,
					}
				]
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
}

export default {
	initialSignupState,
	signUpReducer,

	initialLoginState,
	loginReducer,

	initialUserState,
	userReducer,
}