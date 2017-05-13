import { combineReducers } from 'redux'
import { RECEIVE_POSTS } from '../actions'


function posts(state = { items: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    default:
      return state
  }
}


function postsByReddit(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByReddit
})

export default rootReducer
