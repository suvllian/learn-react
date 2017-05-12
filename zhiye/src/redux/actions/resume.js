import api from './../../api/index.js' 
import { RESUME_STEP_ONE, RESUME_STEP_TWO, RESUME_STEP_THREE, RESUME_STEP_FOUR } from './../type.js'
import { hashHistory } from 'react-router';

function fillResumeOneAction(data, res) {
	hashHistory.push("/resume/stuTwo");

	return {
		type: RESUME_STEP_ONE,
		name: data.get("name"),
		highestDegree: data.get("highestDegree"),
		year: data.get("year"),
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

function fillResumeThirdAction(data, res) {
	hashHistory.push("/resume/stuFour");

	return {
		type: RESUME_STEP_THREE,
		id: res,
		name: data.get("name"),
		highestDegree: data.get("highestDegree"),
		year: data.get("year"),
		phone: data.get("phone"),
		email: data.get("email"),
		city: data.get("city"),
	}
}

function fillResumeFourAction(data, res) {
	hashHistory.push("/resume/myResume");

	return {
		type: RESUME_STEP_FOUR,
		id: res,
		name: data.get("name"),
		highestDegree: data.get("highestDegree"),
		year: data.get("year"),
		phone: data.get("phone"),
		email: data.get("email"),
		city: data.get("city"),
	}
}
