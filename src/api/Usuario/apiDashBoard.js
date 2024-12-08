import axios from "axios";
import ip from "../ipAws";

const apiDashBoard = axios.create({
    baseURL: "http://"+ip+"/api/dasboard"  // Corrigido para "dashboard"
});

apiDashBoard.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiDashBoard;
