import api from './../../api/index.js' 
import { COMPANY_REGISTER, COMPANY_REGISTER_SUCCESS, COMPANY_REGISTER_FAIL } from './../type.js'
import { hashHistory } from 'react-router';

function registerAction(data, res) {
	return {
		type: COMPANY_REGISTER_SUCCESS,
		id: res,
		username: data.get("username"),
		password: data.get("password"),
		email: data.get("email"),
		phone: data.get("phone")
	}
}

function companyReigster(data) {
  return function (dispatch) {
    return api.registerCompany(data)
    .then(json => {
	    dispatch(registerAction(data, json))
    })
  }
}

export function fetchPostsIfNeeded(data) {
	return (dispatch, getState) => {
		return dispatch(companyReigster(data))
	}
}