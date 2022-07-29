// Componentes e contexto continuam com .js
import { createContext, useEffect, useState } from "react";
import { API } from "../api";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(true);

    // ★★ fazer uma função geral para verificar se está logado ★★
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            API.defaults.headers.common["Authorization"] = token;
            setLogado(true);
        }
        setLoading(false);
    }, []);

    // ★★ fazer handle login em context, try catch ★★
    async function handleLogin(usuario) {
        try {
            const {data} = await API.post("/auth", usuario)
            localStorage.setItem("token", data);
            API.defaults.headers.common["Authorization"] = data;
            setLogado(true);
            // navigate("/usuarios");
            window.location.href = "/pessoa";
        } catch (error) {
            alert("Usuário ou senha inválidos");
            console.log(error)
        }
    }

    // ★★ funcao handleLogout para deslogar para apagar o token ★★
    function handleLogout() {
        localStorage.removeItem("token");
        API.defaults.headers.common["Authorization"] = undefined;
        setLogado(false);
        // navigate("/");
        window.location.href = "/";
    }

    // ★★ função handleSignUp para cadastrar usuario e volta para página de login ★★
    async function handleSignUp(usuario) {
        try {
            await API.post("/auth/create", usuario)
            alert("Usuário cadastrado com sucesso!")
            // navigate("/");
            window.location.href = "/";
        }catch (error) {
            console.log(error);
            alert(error)
        }
    }

    // // const Loading = () => {
 
    // // }

    // if(loading) {
    //     return(<h1>Loading</h1>)
    // }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, logado, setLoading }}>
        {children}
    </AuthContext.Provider>
  )
}

// exportar as duas funções juntas
export {AuthProvider, AuthContext};