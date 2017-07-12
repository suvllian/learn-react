import { postFetch, getFetch } from './resource.js';

const registerFetch = (formData) => {
	return postFetch('/register', formData) 
}

const checkPhone = (phone) => {
	return getFetch('/register', 'phone=' + phone)
}

export default { registerFetch, checkPhone }