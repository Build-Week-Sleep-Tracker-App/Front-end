import * as types from './actionTypes';
import moment from 'moment';
import { axiosWithAuth } from '../utils';

export const login = (user, history) => dispatch => {
  dispatch({ type: types.LOGIN_START });
  axiosWithAuth()
    .post('/api/login', user)
    .then(res => {
      localStorage.setItem('sleep_tracker_token', res.data.token);
      localStorage.setItem('sleep_tracker_user_id', res.data.id);
      dispatch({ type: types.LOGIN, payload: res.data.id });
      history.push('/sleep');
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      dispatch(setGlobalError(err.message));
    });
};

export const logout = () => {
  return {
		type: types.LOGOUT,
	}
};

export const signUp = user => dispatch => {
  axiosWithAuth()
    .post('/api/register', user)
    .then(res => {
      console.log(res);
      dispatch({ type: types.SIGNUP });
    })
    .catch(err => {
      console.log(err);
      dispatch(setLoading(false));
      dispatch(setGlobalError(err.message));
    });
};

export const setLoading = isLoading => {
  return {
    type: types.LOADING,
    payload: isLoading
  };
};

export const setUser = data => {
  return {
    type: types.SET_USER,
    payload: data
  };
};

/*
const addUserSleepEntry = entry => {
  return {
    type: types.ADD_SLEEP_ENTRY,
    payload: entry
  };
};
*/
/*
const editUserSleepEntry = entry => {
  return {
    type: types.EDIT_SLEEP_ENTRY,
    payload: entry
  };
};
*/
export const startEditSleepEntry = entry => {
  return {
    type: types.START_EDIT_SLEEP_ENTRY,
    payload: entry
  };
};
/*
const deleteUserSleepEntry = id => {
  return {
    type: types.DELETE_SLEEP_ENTRY,
    payload: id
  };
};
*/
export const setGlobalError = error => {
  return {
    type: types.SET_ERROR,
    payload: error
  };
};

export const changeSleepEntryForm = field => {
  return {
    type: types.ON_CHANGE_SLEEP_FORM,
    payload: field
  };
};

export const addSleepEntry = entry => dispatch => {
  dispatch(setLoading(true));
  entry.hours = moment(entry.end).diff(moment(entry.start), 'hours');
  entry.start = entry.start.replace('T', ' ');
	entry.end = entry.end.replace('T', ' ');
	axiosWithAuth().post(`/api/sleepData`, entry)
		.then(response => {
			dispatch(setUser({ sleepData: response.data }))
			dispatch(setLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(setLoading(false));
			dispatch(setGlobalError(err.message));
		});
};

export const editSleepEntry = entry => dispatch => {
  dispatch(setLoading(true));
  //dispatch(editUserSleepEntry(entry));
	axiosWithAuth().put(`/api/sleepData/${entry.id}`, entry)
		.then(response => {
			console.log('editSleepEntry', response.data);
			dispatch(setUser({ sleepData: response.data }))
			dispatch(setLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(setLoading(false));
			dispatch(setGlobalError(err.message));
		});
};

export const deleteSleepEntry = id => dispatch => {
  dispatch(setLoading(true));
  //dispatch(deleteUserSleepEntry(id));
	axiosWithAuth().delete(`/api/sleepData/${id}`)
		.then(response => {
			console.log('deleteSleepEntry', response.data);
			dispatch(setUser({ sleepData: response.data }))
			dispatch(setLoading(false));
		})
		.catch(err => {
			console.log(err);
			dispatch(setLoading(false));
			dispatch(setGlobalError(err.message));
		});
};

export const getUser = () => dispatch => {
  const userID = localStorage.getItem('sleep_tracker_user_id');
  if (userID > 0) {
    dispatch(setLoading(true));
    axiosWithAuth()
      .get(`/api/user/${userID}`)
      .then(response => {
        console.log(response.data);
        dispatch(setUser(response.data));
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setLoading(false));
        dispatch(setGlobalError(err.message));
      });
  } else {
    dispatch(
      setGlobalError("Can't get user because there's no one logged in!")
    );
  }
};

export const toggleMotionTracking = () => ({
  type: types.TOGGLE_TRACKING
});
