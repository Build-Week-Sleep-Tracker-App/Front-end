import types from './actionTypes';
import { axiosWithAuth } from '../utils';

export const login = () => {
	return {
		type: types.LOGIN
	}
}

export const signUp	= ( user, history ) => {
	return dispatch => {
		axiosWithAuth()
			.post(
				'https://sleeptrack.herokuapp.com/api/register',
				user
			)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}
}