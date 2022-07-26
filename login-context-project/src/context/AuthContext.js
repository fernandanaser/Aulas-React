// Componentes e contexto continuam com .js

// importanto o context:
import { createContext, useState } from "react";
// importanto axios
// import axios from "axios";

import api from "../api";
import { useNavigate } from "react-router-dom";


// colocar a função em uma variável para facilitar o uso
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // usar o useState para saber se tá logado ou nao
    const  [login, setLogin] = useState(false);
    const navigate = useNavigate();

    // fazer handle login em context, try catch
    async function handleLogin(user) {
        try {
            // se o login funcionar fazer o localStorage
            // 	salva informações da url 
            // 	passa chave e valor
            // 	salva no localstorage o token que veio da api
            // redireciona para pagina usuarios com usenavigate
            const {data} = await api.post("/auth", user);
            localStorage.setItem("token", data);
            navigate("/usuarios");
            setLogin(true);
        } catch (error) {
            console.log("Usuário ou senha inválidos");
        }
    }

  return (
    <AuthContext.Provider value={{ handleLogin }}>
        {children}
    </AuthContext.Provider>
  )
}

// exportar as duas funções juntas
export {AuthProvider, AuthContext};