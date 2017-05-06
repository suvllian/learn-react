import { REGBYPHONE, REGBYEMAIL } from './../type.js' 

const initialState = {
    id: 1,
    name: "",
    username: "a",
    password: "",
    phone: "",
    email: "",
    klass: 1
}

function register(state = initialState, action) {
    switch(action.type) {
        case REGBYPHONE:
            return Object.assign({}, state, {
                phone: action.phone,
                username: action.username,
                password: action.password,
                klass: action.klass
            })
            break
        case REGBYEMAIL:
            return Object.assign({}, state, { 
                email: action.email,
                username: action.username,
                password: action.password,
                klass: action.klass
            })
            break
        default:
            return state
    }
}

export default register;