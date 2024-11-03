import axios from "axios";

const apiResponsavel = axios.create({
    baseURL: "http://localhost:8080/api/responsaveis"
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