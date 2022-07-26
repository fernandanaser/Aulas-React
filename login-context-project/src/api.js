// criar api.js em src e importar axios
import axios from "axios";

// definir a baseUrl - swagger
export default axios.create({
    baseURL: 'https://dbc-pessoa-api.herokuapp.com/auth'
})