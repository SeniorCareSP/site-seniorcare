import axios from "axios";
import ip from "../ipAws";

const apiFavorito = axios.create({
    baseURL: "http://"+ip+"/api/favoritos"
})

apiFavorito.interceptors.request.use(
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
  

export default apiFavorito;