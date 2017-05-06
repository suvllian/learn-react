import { REGBYPHONE, REGBYEMAIL } from './../type.js'  
import api from './../../api/index.js'

export const regByPhone = obj => {
	api.registerByPhone(obj).then(res => {
		console.log(res);
	})
    return {
        type: REGBYPHONE,
        phone: obj.phone,
        username: obj.username,
        password: obj.password,
        klass: obj.klass
    }
}

export const regByEmail = obj => {
    return {
        type: REGBYPHONE,
        email: obj.email,
        username: obj.username,
        password: obj.password,
        klass: obj.klass
    }
}