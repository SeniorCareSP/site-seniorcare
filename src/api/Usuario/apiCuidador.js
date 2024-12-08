import axios from "axios";
import ip from "../ipAws";

const apiCuidador = axios.create({
    baseURL: "http://"+ip+"/api/cuidadores"
})

export default apiCuidador;