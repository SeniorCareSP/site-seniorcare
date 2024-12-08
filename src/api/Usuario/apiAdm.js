import axios from "axios";
import ip from "../ipAws";
const apiAdm = axios.create({
    baseURL: "http://"+ip+"/api/administradores"
})

apiAdm.interceptors.request.use(
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
  

export default apiAdm;