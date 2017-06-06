import { postFetch, getFetch } from './resource.js';

const login = (formData) => { 
	formData.append("concrete", "login");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

const register = (formData) => { 
	formData.append("concrete", "register");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

const fillResume = (formData) => { 
	formData.append("concrete", "resume");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

const getResume = (getInfo) => { 
	let data = "concrete=getStuInfo&" + getInfo;
	let promiseRes = getFetch(data);
	return promiseRes;
}



export default { register, fillResume, getResume, login }