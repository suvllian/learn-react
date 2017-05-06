import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from './../type.js' 

const initialState = {
    number: 1
}

function login(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.number })
            break
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.number })
            break
        case GETSUCCESS:
            return Object.assign({}, state, { data: action.json })
        case REFRESHDATA:
            return Object.assign({}, state, { data: [] })
        default:
            return state
    }
}

export default login;