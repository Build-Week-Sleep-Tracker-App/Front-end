import axios from 'axios';

export default function Login (props) {
	return axios.create({
		//"baseUrl": 'https://sleeptrack.herokuapp.com/',
		"baseUrl": 'http://localhost:4000/',
		"headers": {
			"Content-Type": "application/json",
			"authorize": localStorage.getItem('sleep_tracker_token')
		}
	})
}