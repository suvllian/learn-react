import fetch from 'isomorphic-fetch'

const URL = "http://localhost:3000";

const getInit = {
	method: "GET",
	mode: "cors",
	cache: "default"
}

const postInit = (formData) => {
	return {
		method: "POST",
		mode: "cors",
		cache: "default",
		body: formData
	}
}

exports.postFetch = (path, formData) => {
	return fetch(URL + path, postInit(formData)).then(response => response.json());
}

exports.getFetch = (path, data) => {
	return fetch(URL + path + "?" + data).then(response => response.json());
}