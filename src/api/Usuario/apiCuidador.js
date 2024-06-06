import axios from "axios";

const apiCuidador = axios.create({
    baseURL: "http://localhost:8080/cuidadores"
})

export default apiCuidador;