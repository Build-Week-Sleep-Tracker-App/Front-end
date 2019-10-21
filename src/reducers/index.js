import * as types from "../actions/actionTypes";

const initialSignupState = {
  isSignedUp: false
};

const initialLoginState = {
  isLoggingIn: false,
  isLoggedIn: false,
  userID: null
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
