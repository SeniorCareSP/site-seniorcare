import axios from "axios";
import ip from "../ipAws";

const apiUsuarioLogin = axios.create({
    baseURL: "http://"+ip+"/api/usuarios"
})
export default apiUsuarioLogin;