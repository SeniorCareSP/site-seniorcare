import axios from "axios";

const api = axios.create({
    baseURL: "https://6601e7a19d7276a755526080.mockapi.io/music-box"
    });

export default api;