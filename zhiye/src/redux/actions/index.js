import fetch from 'isomorphic-fetch'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function receivePosts(reddit, json) {
	return {
		type: RECEIVE_POSTS,
		reddit: reddit,
		posts: json.data.children.map(child =>child.data)
	}
}

function fetchPosts(subreddit) {
    return function (dispatch) {
        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
		    .then(response => response.json())
		    .then(json =>
			    dispatch(receivePosts(subreddit, json))
		    )
    }
}

export function fetchPostsIfNeeded(subreddit) {
	return (dispatch, getState) => {
		return dispatch(fetchPosts(subreddit))
	}
}