import axios from "axios";

const AxiosClient = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
});

AxiosClient.interceptors.request.use((request) => {
	const token = localStorage.getItem("token");
	if (token) {
		const bearerToken = JSON.parse(token);
		request.headers.Authorization = `Bearer ${bearerToken}`;
	} else {
		delete request.headers.Authorization;
	}
	return request;
});

// AxiosClient.interceptors.response.use((response) => {
// 	return console.log(response);
// });

export default AxiosClient;
