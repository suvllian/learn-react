import api from './../../api/index.js' 
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from './../type.js'
import { hashHistory } from 'react-router';

function registerAction(data, res) {
	hashHistory.push("/register/stuOne");

	return {
		type: REGISTER_SUCCESS,
		id: res,
		username: data.get("username"),
		password: data.get("password"),
		klass: data.get("klass"),
		email: data.get("email"),
		phone: data.get("phone"),
	}
}

function registerPosts(data) {
    return function (dispatch) {
        return api.register(data)
		    .then(json => {
			    dispatch(registerAction(data, json))
		    })
    }
}

export function fetchPostsIfNeeded(data) {
	return (dispatch, getState) => {
		return dispatch(registerPosts(data))
	}
}