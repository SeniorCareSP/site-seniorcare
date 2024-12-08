import axios from "axios";
import ip from "../ipAws";

const apiResponsavel = axios.create({
    baseURL: "http://"+ip+"/api/responsaveis"
})

apiResponsavel.interceptors.request.use(
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
  
export default apiResponsavel;