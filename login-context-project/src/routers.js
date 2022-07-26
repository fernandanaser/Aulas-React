import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Usuarios from "./pages/Usuarios/Usuarios";
// importar o Authprovider e oclocar no browserouter
// import { AuthProvider } from "./context/AuthContext";
 

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Definindo as rotas de cada página */}
                <Route path="/" element={<Login />}/>
                <Route path="/usuarios" element={<Usuarios />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;