import types from '../actions/actionTypes';

const initialSignupState = {
	isSignedUp: false,
}

const initialLoginState = {
	username: "",
	password: ""
}

export const signUpReducer = (state = initialSignupState, action) {
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

export const loginReducer = (state = initialLoginState, action) => {
	switch(action.type) {
		case types.LOGIN:
			return state;
		default:
			return state;
	}
}
