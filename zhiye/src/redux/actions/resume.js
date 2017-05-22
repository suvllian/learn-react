import api from './../../api/index.js' 
import { RESUME_STEP_ONE, RESUME_STEP_TWO, RESUME_STEP_THREE, 
		RESUME_STEP_FOUR, GET_RESUME } from './../type.js'
import { hashHistory } from 'react-router';

function fillResumeOneAction(data, res) {
	hashHistory.push("/resume/stuTwo");

	return {
		type: RESUME_STEP_ONE,
		name: data.get("name"),
		highestDegree: data.get("highestDegree"),
		workYears: data.get("year"),
		phone: data.get("phone"),
		email: data.get("email"),
		city: data.get("city"),
	}
}

function fillResumeOnePosts(data) {
  return function (dispatch) {
    return api.fillResume(data)
    .then(json => {
	    dispatch(fillResumeOneAction(data, json))
    })
  }
}

export function fillResumeStepOne(data) {
	return (dispatch, getState) => {
		return dispatch(fillResumeOnePosts(data))
	}
}


function fillResumeTwoAction(data, res) {
	hashHistory.push("/resume/stuThree");

	let graduate = {};
	graduate.school = data.get("school");
	graduate.major = data.get("major");
	graduate.degree = data.get("degree");
	graduate.graduate = data.get("graduate");

	return {
		type: RESUME_STEP_TWO,
		education: graduate
	}
}

function fillResumeTwoPosts(data) {
	return function (dispatch) {
    return api.fillResume(data)
    .then(json => {
	    dispatch(fillResumeTwoAction(data, json))
    })
	}
}

export function fillResumeStepTwo(data) {
	return (dispatch, getState) => {
		return dispatch(fillResumeTwoPosts(data))
	}
}

function fillResumeThreeAction(data, res) {
	hashHistory.push("/resume/stuFour");

	let works = {};
	works.company = data.get("company");
	works.job = data.get("job");
	works.startTime = data.get("startTime");
	works.endTime = data.get("endTime");

	return {
		type: RESUME_STEP_THREE,
		work: works
	}
}

function fillResumeThreePosts(data) {
  return function (dispatch) {
    return api.fillResume(data)
    .then(json => {
	    dispatch(fillResumeThreeAction(data, json))
    })
  }
}

export function fillResumeStepThree(data) {
	return (dispatch, getState) => {
		return dispatch(fillResumeThreePosts(data))
	}
}

function fillResumeFourAction(data, res) {
	hashHistory.push("/resume/myResume");

	return {
		type: RESUME_STEP_FOUR,
		words: data.get("words")
	}
}

function fillResumeFourPosts(data) {
  return function (dispatch) {
    return api.fillResume(data)
    .then(json => {
	    dispatch(fillResumeFourAction(data, json))
    })
  }
}

export function fillResumeStepFour(data) {
	return (dispatch, getState) => {
		return dispatch(fillResumeFourPosts(data))
	}
}

function getResumeAction(data, res) {
	return {
		type: GET_RESUME
	}
}

function getResumePosts(data) {
  return function (dispatch) {
    return api.getResume(data)
    .then(json => {
	    dispatch(getResumeAction(data, json))
    })
  }
}

export function getResumeResult(data) {
	return (dispatch, getState) => {
		return dispatch(getResumePosts(data))
	}
}