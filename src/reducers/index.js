import types from '../actions/actionTypes';
const initialLoginState = {
	username: "",
	password: ""
}
const loginReducer = (state = initialLoginState, action) => {
	switch(action.type) {
		case types.LOGIN:
			return state;
		default:
			return state;
	}
}

export default {
	loginReducer
}