import { postMessage, getMessage } from './resource.js';

const url = "http://127.0.0.1/zhiye/index.php";

const register = (obj) => { 
	let urlWithParams = url + "?concrete=register&page=" + page;
	return getMessage(urlWithParams);
}

const registerByPhone = (obj) => {
	let data = "concrete=register&phone=" + obj.phone + 
				"&username=" + obj.username + "&password=" + obj.password +
				"&klass=" + obj.klass ;
	return postMessage(url, data);
}

export default { registerByPhone }