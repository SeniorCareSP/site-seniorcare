import axios from "axios";

const apiFavorito = axios.create({
    baseURL: "http://localhost:8080/favoritos"
})

export default apiFavorito;