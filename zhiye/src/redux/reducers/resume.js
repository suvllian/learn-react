import { RESUME_STEP_ONE, RESUME_STEP_TWO, RESUME_STEP_THREE, RESUME_STEP_FOUR } from './../type.js'

const initialState = {
	name: "",
	highestDegree: "",
	workYears: 0,
	phone: "",
	email: "",
	nowCity: "",
	education: [],
	work: [],
	words: "",
	klass: 1
}

function resumeReducer(state = initialState, action) {
	switch (action.type) {
		case RESUME_STEP_ONE:
			return Object.assign({}, state, {
			  name: action.name,
			  highestDegree: action.highestDegree,
			  workYears: action.workYears,
			  nowCity: action.nowCity,
			  phone: action.phone,
			  email: action.email,
			})
		case RESUME_STEP_TWO:
			return Object.assign({}, state, {
			  education: action.education
			})
		default:
			return state
	}
}

export default resumeReducer