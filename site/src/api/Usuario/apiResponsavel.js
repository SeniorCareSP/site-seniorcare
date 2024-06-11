import axios from "axios";

const apiResponsavel = axios.create({
    baseURL: 'https://seniorcarejava.azurewebsites.net/responsaveis' ||  "http://localhost:8080/responsaveis"
})

export default apiResponsavel;