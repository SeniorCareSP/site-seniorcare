import axios from "axios";

const apiDashBoard = axios.create({
    baseURL: "http://localhost:8080/dasboard"  // Corrigido para "dashboard"
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
