import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from './../type.js'

const initialState = {
	id: 0,
	phone: 0,
	username: "username",
	password: "password",
	email: "email"
}

function registerReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER_SUCCESS:
			return Object.assign({}, state, {
			  id: action.id,
			  username: action.username,
			  password: action.password,
			  phone: action.phone,
			  email: action.email,
			})
		default:
			return state
	}
}

export default registerReducer