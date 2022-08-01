import axios from "axios";

const API = axios.create({
    baseURL: 'https://dbc-pessoa-api.herokuapp.com',
})

const APICEP = axios.create({
    baseURL: "https://viacep.com.br/ws",
})

export {API, APICEP};
