import types from '../actions/actionTypes';
import moment from 'moment';

const initialSignupState = {
	isSignedUp: false,
}

export const signUpReducer = (state = initialSignupState, action) => {
	switch (action.type) {
		case types.SIGNUP:
			return {
				...state,
				isSignedUp: true,
			}
			default:
				return state;
	}
}

const initialLoginState = {
	username: "",
	password: ""
}

export const loginReducer = (state = initialLoginState, action) => {
	switch(action.type) {
		case types.LOGIN:
			return state;
		default:
			return state;
	}
}

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
			return action.payload;
		default:
			return state;
	}
}

const today = moment().format('YYYY-MM-DDTHH:mm');
const initialSleepFormState = {
	"userID": "", // update on login or access (even if auto logs in from token)
	"start": today,
	"end": today,
	"difference": "",
	"bed_t_tracking": "",
	"work_t_tracking": "",
	//"avarage_rating": "",
	"average_rating": "",
};
const sleepFormReducer = (state = initialSleepFormState, action) => {
	switch (action.type) {
		case types.SET_USER:
			return {
				...state,
				"userID": action.payload.id
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
	initialLoginState,
	loginReducer,

	initialUserState,
	userReducer,

	initialSleepFormState,
	sleepFormReducer,
}
