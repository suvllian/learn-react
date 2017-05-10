import { postFetch, getFetch } from './resource.js';

const register = (formData) => { 
	formData.append("concrete", "register");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

export default { register }