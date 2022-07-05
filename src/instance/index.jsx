import axios from "axios";

const token = localStorage.getItem('token')
const authToken = `Bearer ${token}`;

const instance = axios.create({
    baseURL: "https://bbaze.herokuapp.com/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": authToken,
    }
});

export default instance;