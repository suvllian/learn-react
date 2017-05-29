import { COMPANY_REGISTER, COMPANY_REGISTER_SUCCESS, COMPANY_REGISTER_FAIL } from './../type.js'

const initialState = {
	id: 0,
	phone: 0,
	username: "username",
	password: "password",
	email: "email"
}

function companyRegisterReducer(state = initialState, action) {
	switch (action.type) {
		case COMPANY_REGISTER_SUCCESS:
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

export default companyRegisterReducer