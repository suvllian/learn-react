import { combineReducers } from 'redux'
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from './../type.js'

const initialState = {
	id: 0,
	isLoginSuccess: false
}

function loginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
			  id: action.id,
			  isLoginSuccess: true
			})
		case LOGIN_FAIL:
			return Object.assign({}, state, {
			  id: 0,
			  isLoginSuccess: false
			})
		default:
			return state
	}
}

export default loginReducer