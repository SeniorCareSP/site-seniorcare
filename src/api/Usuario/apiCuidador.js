import axios from "axios";

const apiCuidador = axios.create({
    baseURL: "http://localhost:8080/api/cuidadores"
})

export default apiCuidador;