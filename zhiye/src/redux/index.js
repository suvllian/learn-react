import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import register from './reducers/register.js'
import resume from './reducers/resume.js'

const rootReducer = combineReducers({
    register,
    resume
})

export default rootReducer;