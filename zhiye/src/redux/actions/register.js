import api from './../../api/index.js' 
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from './../type.js'

function receivePosts(data, res) {
	return {
		type: REGISTER,
		id: res
	}
}

function fetchPosts(data) {
    return function (dispatch) {
        return api.register(data)
		    .then(response => response.json())
		    .then(json => {
			    dispatch(receivePosts(data, json))
		    })
    }
}

export function fetchPostsIfNeeded(data) {
	return (dispatch, getState) => {
		return dispatch(fetchPosts(data))
	}
}