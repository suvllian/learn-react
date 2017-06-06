import { combineReducers } from 'redux'
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from './../type.js'

const initialState = {
	id: 0,
	phone: 0,
	username: "username",
	password: "password",
	email: "email",
	klass: 1
}

function registerReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_SUCCESS:
			return Object.assign({}, state, {
			  id: action.id,
			  username: action.username,
			  password: action.password,
			  klass: action.klass,
			  phone: action.phone,
			  email: action.email,
			})
		default:
			return state
	}
}

export default registerReducer