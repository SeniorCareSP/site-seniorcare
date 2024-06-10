import axios from "axios";

const apiUsuario = axios.create({
    baseURL: 'https://seniorcarejava.azurewebsites.net/usuarios' ||  "http://localhost:8080/usuarios"
})



export default apiUsuario;