import axios from "axios";

const apiChat = axios.create({
    baseURL: "http://localhost:8080/api/notification"
})

apiChat.interceptors.request.use(
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
  

export default apiChat;