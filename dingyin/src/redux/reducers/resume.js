import { RESUME_STEP_ONE, RESUME_STEP_TWO, RESUME_STEP_THREE,
	 RESUME_STEP_FOUR, GET_RESUME } from './../type.js'

const initialState = {
	name: "",
	highestDegree: "",
	workYears: 0,
	phone: "",
	email: "",
	city: "",
	education: [],
	work: [],
	words: "",
	klass: 1
}

function resumeReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RESUME:
			return Object.assign({}, state, {
			  name: action.name,
			  highestDegree: action.highestDegree,
			  workYears: action.workYears,
			  city: action.city,
			  phone: action.phone,
			  email: action.email,
			})
		case RESUME_STEP_ONE:
			return Object.assign({}, state, {
			  name: action.name,
			  highestDegree: action.highestDegree,
			  workYears: action.workYears,
			  city: action.city,
			  phone: action.phone,
			  email: action.email,
			})
		case RESUME_STEP_TWO:
			return Object.assign({}, state, {
			  education: action.education
			})
		case RESUME_STEP_THREE:
			return Object.assign({}, state, {
			  work: action.work
			})
		case RESUME_STEP_FOUR:
			return Object.assign({}, state, {
			  words: action.words
			})
		default:
			return state
	}
}

export default resumeReducer