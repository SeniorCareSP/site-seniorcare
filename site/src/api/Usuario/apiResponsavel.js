import axios from "axios";

const apiResponsavel = axios.create({
    baseURL: "http://localhost:8080/responsaveis"
})

export default apiResponsavel;