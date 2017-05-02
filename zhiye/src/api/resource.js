import axios from 'axios';

exports.postMessage = (url, data) => {
	return axios.post(url, data,
		{
			'headers' : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			},
		})
}

exports.getMessage = (urlWithParams) => {
	return axios.get(urlWithParams)
}