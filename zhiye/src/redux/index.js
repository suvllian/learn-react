import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Register from './reducers/register.js'
import Resume from './reducers/resume.js'
import Login from './reducers/login.js'
import CompanyRegister from './reducers/company.js'

const rootReducer = combineReducers({
  Register,
  Resume,
  Login,
  CompanyRegister
})

export default rootReducer;