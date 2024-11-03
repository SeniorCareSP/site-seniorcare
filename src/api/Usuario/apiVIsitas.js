import axios from "axios";

const apiVisitas = axios.create({
    baseURL: "http://localhost:8080/api/visitas"
})

export default apiVisitas;