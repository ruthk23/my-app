import axios from "axios"
const Instance = axios.create({
	//  THE API (cloud function) URL
	baseURL: "https://amazon-back-nfag.onrender.com",
	//  "http://127.0.0.1:5001/fir-3498b/us-central1/api",
	//http://127.0.0.1:5001/clone-front-2c5cd/us-central1/api
});
export default Instance