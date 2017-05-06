import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Login from './reducers/login.js'
import Register from './reducers/register.js'

const rootReducer = combineReducers({
	Login,
	Register,
	routing: routerReducer
})

export default rootReducer;