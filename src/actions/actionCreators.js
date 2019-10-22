import * as types from './actionTypes'
import moment from 'moment'
import { axiosWithAuth } from '../utils'

export const login = (user, history) => {
  return dispatch => {
    dispatch({ type: types.LOGIN_START })
    axiosWithAuth()
      .post('https://sleeptrack.herokuapp.com/api/login', user)
      .then(res => {
        localStorage.setItem('sleep_tracker_token', res.data.token)
        localStorage.setItem('sleep_tracker_user_id', res.data.id)
        dispatch({ type: types.LOGIN, payload: res.data.id })
        history.push('/sleepentryform')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const logout = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem('sleep_tracker_token')
  dispatch(setUser({}))
}

export const signUp = user => dispatch => {
  axiosWithAuth()
    .post('https://sleeptrack.herokuapp.com/api/register', user)
    .then(res => {
      console.log(res)
      dispatch({ type: types.SIGNUP })
    })
    .catch(err => {
      console.log(err)
    })
}

export const setLoading = isLoading => {
  return {
    type: types.LOADING,
    payload: isLoading
  }
}

export const setUser = data => {
  return {
    type: types.SET_USER,
    payload: data
  }
}

export const setGlobalError = error => {
  return {
    type: types.SET_ERROR,
    payload: error
  }
}

export const changeSleepEntryForm = field => {
  return {
    type: types.ON_CHANGE_SLEEP_FORM,
    payload: field
  }
}

export const addSleepEntry = entry => dispatch => {
  dispatch(setLoading(true))
  entry.difference = moment(entry.end).diff(moment(entry.start), 'hours')
  console.log('addSleepEntry request', entry)
  axiosWithAuth()
    .post(`/api/sleepData`, entry)
    .then(response => {
      console.log(response.data)
      // do stuff with response here
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.log(err)
      dispatch(setLoading(false))
      dispatch(setGlobalError(err.message))
    })
}

export const editSleepEntry = entry => dispatch => {
  dispatch(setLoading(true))
  console.log('editSleepEntry request', entry)
  axiosWithAuth()
    .put(`/api/sleepData/${entry.id}`, entry)
    .then(response => {
      console.log(response.data)
      // do stuff with response here
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.log(err)
      dispatch(setLoading(false))
      dispatch(setGlobalError(err.message))
    })
}

export const deleteSleepEntry = entry => dispatch => {
  dispatch(setLoading(true))
  console.log('deleteSleepEntry request', entry)
  axiosWithAuth()
    .put(`/api/sleepData/${entry.id}`, entry)
    .then(response => {
      console.log(response.data)
      // do stuff with response here
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.log(err)
      dispatch(setLoading(false))
      dispatch(setGlobalError(err.message))
    })
}
