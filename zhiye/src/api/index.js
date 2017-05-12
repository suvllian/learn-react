import { postFetch, getFetch } from './resource.js';

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


export default { register, fillResume }