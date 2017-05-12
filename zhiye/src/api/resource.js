import fetch from 'isomorphic-fetch'

const URL = "http://127.0.0.1/zhiye/index.php";

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

exports.postFetch = (formData) => {
	let data = postInit(formData);
	return fetch(URL, data).then(response => response.json());
}

exports.getFetch = (data) => {
	let urlWithParams = URL + "?" + data;
	return fetch(urlWithParams).then(response => response.json());
}