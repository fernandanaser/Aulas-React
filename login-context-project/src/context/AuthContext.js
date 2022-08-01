import { createContext, useEffect, useState } from "react";
import { API } from "../api";
import Loading from "../components/Loading/Loading";
// import { toast } from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(true);

    // ★★ fazer uma função geral para verificar se está logado ★★
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("token existe " + token)
        if (token) {
            API.defaults.headers.common["Authorization"] = token;
            setLogado(true);
        }
        setLoading(false);
    }, []);

    // ★★ fazer handle login em context, try catch ★★
    async function handleLogin(usuario) {
        try {
            console.log(usuario)
            const { data } = await API.post("/auth", usuario)
            console.log(data)
            localStorage.setItem("token", data, {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
            });
            setLogado(true);
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
        window.location.href = "/";
    }

    // ★★ função handleSignUp para cadastrar usuario e volta para página de login ★★
    async function handleSignUp(usuario) {
        try {
            await API.post("/auth/create", usuario)
            alert("Usuário Cadastrado com sucesso!")
            window.location.href = "/";
        } catch (error) {
            alert(error);
        }
        setLoading(false)
    }

    function goCadastro() {
        window.location.href = "/usuarios";
    }

    function goHome() {
        window.location.href = "/";
    }

    // const Loading = () => {

    // }

    if (loading) {
        return (<Loading />)
    }

    return (
        <AuthContext.Provider value={{
            handleLogin,
            handleLogout,
            handleSignUp,
            setLoading,
            logado,
            goCadastro,
            goHome
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// exportar as duas funções juntas
export { AuthProvider, AuthContext };