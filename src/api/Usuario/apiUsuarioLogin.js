import axios from "axios";

const apiUsuarioLogin = axios.create({
    baseURL: "http://localhost:8080/api/usuarios"
})
export default apiUsuarioLogin;