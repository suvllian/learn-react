import api from './../../api/index.js' 
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './../type.js'
import { hashHistory } from 'react-router'

function loginAction(data, res) {
	hashHistory.push("/resume/myResume");
	return {
		type: LOGIN_SUCCESS,
		id: res
	}
}

function loginPosts(data) {
  return function (dispatch) {
    return api.login(data)
    .then(json => {
	    dispatch(loginAction(data, json))
    })
  }
}

export function loginFunction(data) {
	return (dispatch, getState) => {
		return dispatch(loginPosts(data))
	}
}