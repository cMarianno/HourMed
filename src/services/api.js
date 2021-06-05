import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.102:3013/api/v1/"
});

export default api;