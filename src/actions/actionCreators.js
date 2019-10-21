import types from './actionTypes';
import axiosWithAuth from '../helpers/axiosWithAuth';

export const login = () => {
	return {
		type: types.LOGIN
	}
}

export const setLoading = (isLoading) => {
	return {
		type: types.LOADING,
		payload: isLoading
	}
}

export const setUser = (data) => {
	return {
		type: types.SET_USER,
		payload: data,
	}
}

export const setGlobalError = (error) => {
	return {
		type: types.SET_ERROR,
		payload: error,
	}
}

export const changeSleepEntryForm = field => {
	return {
		type: types.ON_CHANGE_SLEEP_FORM,
		payload: field
	}
}

export const addSleepEntry = entry => dispatch => {
	dispatch(setLoading(true));
	console.log('addSleepEntry request', entry);
	axiosWithAuth().post(`/api/sleepData`, entry)
	.then(response => {
		console.log(response.data);
		// do stuff with response here
		dispatch(setLoading(false));
	})
	.catch(err => {
		console.log(err);
		dispatch(setLoading(false));
		dispatch(setGlobalError(err.message));
	});
}

export const editSleepEntry = entry => dispatch => {
	dispatch(setLoading(true));
	console.log('editSleepEntry request', entry);
	axiosWithAuth().put(`/api/sleepData/${entry.id}`, entry)
	.then(response => {
		console.log(response.data);
		// do stuff with response here
		dispatch(setLoading(false));
	})
	.catch(err => {
		console.log(err);
		dispatch(setLoading(false));
		dispatch(setGlobalError(err.message));
	});
}

export const deleteSleepEntry = entry => dispatch => {
	dispatch(setLoading(true));
	console.log('deleteSleepEntry request', entry);
	axiosWithAuth().put(`/api/sleepData/${entry.id}`, entry)
	.then(response => {
		console.log(response.data);
		// do stuff with response here
		dispatch(setLoading(false));
	})
	.catch(err => {
		console.log(err);
		dispatch(setLoading(false));
		dispatch(setGlobalError(err.message));
	});
}