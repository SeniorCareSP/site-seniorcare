import axios from "axios";
import ip from "../ipAws";
const apiVisitas = axios.create({
    baseURL: "http://"+ip+"/api/denuncias"
})

export default apiVisitas;