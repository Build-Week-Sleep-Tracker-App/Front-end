import * as types from '../actions/actionTypes';
import { getUserID } from '../utils';
import moment from 'moment';

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
				"id": getUserID(),
			};
		case types.ADD_SLEEP_ENTRY:
			sleepEntryID++;
			return {
				...state,
				sleepData: [...state.sleepData, { ...action.payload, "id": sleepEntryID }]
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

const dateStart = moment().format('YYYY-MM-DDTHH:mm');
const dateEnd = moment().add(7, 'hours').format('YYYY-MM-DDTHH:mm');
let sleepEntryID = 0;
const initialSleepFormState = {
	"id": 0,
	"userID": getUserID(),
	"start": dateStart,
	"end": dateEnd,
	"difference": 7,
	"bed_t_tracking": 1,
	"work_t_tracking": 1,
	"average_rating": 1,
};
const sleepFormReducer = (state = initialSleepFormState, action) => {
	switch (action.type) {
		case types.SET_USER:
			return {
				...state,
				"userID": getUserID(),
			}
		case types.ON_CHANGE_SLEEP_FORM:
			return {
				...state,
				...action.payload
			}
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

	initialSleepFormState,
	sleepFormReducer,
}