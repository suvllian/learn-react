import { postMessage, getMessage } from './resource.js';

const url = "./static/api/index.php";
// const url = "http://127.0.0.1/api/index.php";

const getImageList = (page) => { 
	let urlWithParams = url + "?concrete=getImage&page=" + page;
	return getMessage(urlWithParams);
}

const deleteItem = (id) => {
	let data = "concrete=deleteImage&id=" + id;
	return postMessage(url, data);
}

const uploadImage = (fileData) => {
	return postMessage(url, fileData);
}

const getNumber = () => {
	let urlWithParams = url + "?concrete=getNumber";
	return getMessage(urlWithParams);
}

const login = (name, pass) => {
	let data = "concrete=login&name=" + name + "&pass=" + pass;
	return postMessage(url, data);
}

const getSmallPicId = (id) => {
	let urlWithParams = url + "?concrete=getSmallPicId&id=" + id;
	return getMessage(urlWithParams);
}

const getPicSrc = (id) => {
	let urlWithParams = url + "?concrete=getPicSrc&id=" + id;
	return getMessage(urlWithParams);
}

export default { getImageList, deleteItem, uploadImage, getNumber, login, getSmallPicId, getPicSrc }