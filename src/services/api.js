import axios from "axios";

const api = axios.create({
    baseURL: "https://hackathon-covid-backend.herokuapp.com/"
});

export default api;