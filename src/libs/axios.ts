import axios from "axios";

export const URL = import.meta.env.PROD
	? "https://skinsmania.onrender.com"
	: "http://localhost:3001";

const instance = axios.create({
	baseURL: URL,
	withCredentials: true,
});

instance.interceptors.response.use(
	response => response,
	error => {
		// Handle errors here
		if (error.response?.status) {
			switch (error.response.status) {
				case 401:
					// Handle Unauthenticated here
					localStorage.setItem("lastUrl", window.location.href);
					window.location.href = `${URL}${error.response.data}/`;
					break;
				case 403:
					// Handle Unauthorized here
					break;
				// ... And so on
			}
		}

		return error;
	}
);

export { instance };
