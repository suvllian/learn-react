import { postFetch, getFetch } from './resource.js';

exports.login = (formData) => { 
	formData.append("concrete", "login");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.register = (formData) => { 
	formData.append("concrete", "register");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.fillResume = (formData) => { 
	formData.append("concrete", "resume");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.getResume = (getInfo) => { 
	let data = "concrete=getStuInfo&" + getInfo;
	let promiseRes = getFetch(data);
	return promiseRes;
}

exports.registerCompany = (formData) => {
	formData.append("concrete", "company");
	let promiseRes = postFetch(formData);
	return promiseRes;
}

exports.checkValue = (getInfo) => {
	let data = "concrete=check&" + getInfo;
	let promiseRes = getFetch(data);
	return promiseRes;
}