import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils";

export const login = (user, history) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_START });
    axiosWithAuth()
      .post("https://sleeptrack.herokuapp.com/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.id);
        dispatch({ type: types.LOGIN, payload: res.data.id})
        history.push("/sleepentryform");
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const signup = user => {
  return dispatch => {
    dispatch({ type: types.SIGNUP });
    axiosWithAuth()
      .post("https://sleeptrack.herokuapp.com/api/register", user)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };
};
