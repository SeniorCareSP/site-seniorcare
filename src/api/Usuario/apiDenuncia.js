import axios from "axios";

const apiDenuncia = axios.create({
    baseURL: "http://localhost:8080/denuncias"
})

apiDenuncia.interceptors.request.use(
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
  

export default apiDenuncia;