import axios from "axios";

const apiCuidador = axios.create({
    baseURL: 'https://seniorcarejava.azurewebsites.net/cuidadores' || 'http://localhost:8080/cuidadores'
})

export default apiCuidador;