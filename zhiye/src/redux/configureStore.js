import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './index.js'

const loggerMiddleware = createLogger()
const middleware = [thunkMiddleware, loggerMiddleware];

const createStoreWithMiddleware = compose(
	applyMiddleware(...middleware)
)(createStore)


export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}