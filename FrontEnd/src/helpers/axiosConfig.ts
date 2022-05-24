import axios from "axios";

const serverAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: { "Content-Type": "multipart/form-data" },
});
const utenteAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});
export { serverAxios, utenteAxios };
