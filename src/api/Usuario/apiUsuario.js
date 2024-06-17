import axios from "axios";

const apiUsuario = axios.create({
    baseURL: "http://localhost:8080/usuarios"
})

apiUsuario.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2FvLnNpYWx2c2FAZWZheG1hcGxlZC5jb20iLCJpYXQiOjE3MTgxMzg5NjgsImV4cCI6NTMxODEzODk2OH0.zYH1_seXOoCthbeWD-X99mPAo-NXiHVmipaG-oA2X58u030oXuD2fPWBM8C9-5DXyyOeYsdX1sbCMBCblE3NQw');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default apiUsuario;