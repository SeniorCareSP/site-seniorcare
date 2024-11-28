import axios from "axios";

const apiVisitas = axios.create({
    baseURL: "/api/denuncias" // isso funciona com o proxy configurado no package.json
})

export default apiVisitas;