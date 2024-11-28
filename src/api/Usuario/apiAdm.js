import axios from "axios";

const apiAdm = axios.create({
    baseURL: "http://54.82.210.113/api/administradores"
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