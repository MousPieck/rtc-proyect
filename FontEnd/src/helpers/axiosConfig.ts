import axios from "axios";
import { urls } from "./constants";

const serverAxios = axios.create({
	baseURL: urls.SERVER,
	headers: { "Content-Type": "multipart/form-data" },
});
const utenteAxios = axios.create({
	baseURL: urls.SERVER,
});
export { serverAxios, utenteAxios };
