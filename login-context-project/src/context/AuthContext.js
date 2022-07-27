// Componentes e contexto continuam com .js

// importanto o context:
import { createContext, useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";


// colocar a função em uma variável para facilitar o uso
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    // usar o useState para saber se tá logado ou nao
    const  [logado, setLogado] = useState(false);
    const navigate = useNavigate();

    // ★★ fazer handle login em context, try catch ★★
    async function handleLogin(values) {
        try {
            // se o login funcionar fazer o localStorage
            // 	salva informações da url 
            // 	passa chave e valor
            // 	salva no localstorage o token que veio da api
            // redireciona para pagina usuarios com usenavigate
            const {data} = await API.post("/auth", values)
            localStorage.setItem("token", data);
            setLogado(true);
            navigate("/usuarios");
        } catch (error) {
            alert("Usuário ou senha inválidos");
            console.log(error)
        }
    }

    // ★★ funcao handleLogout para deslogar para apagar o token ★★
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    // ★★ função handleSignUp para cadastrar usuario e volta para página de login ★★
    async function handleSignUp(values) {
        try {
            await API.post("/auth/create", values)
            alert("Usuário cadastrado com sucesso!")
            navigate("/");
        }catch (error) {
            console.log(error);
        }
    }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout }}>
        {children}
    </AuthContext.Provider>
  )
}

// exportar as duas funções juntas
export {AuthProvider, AuthContext};