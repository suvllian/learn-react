import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import register from './reducers/register.js'

const rootReducer = combineReducers({
    register
})

export default rootReducer;