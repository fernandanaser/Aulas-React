import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthProvider } from "./context/AuthContext";
import Endereco from "./pages/Endereco/Endereco";
import Login from "./pages/Login/Login";
import Pessoas from "./pages/Pessoas/Pessoas";
import Usuarios from "./pages/Usuarios/Usuarios";


const Routers = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    {/* Definindo as rotas de cada página */}
                    <Route path="/" element={<Login />} />
                    <Route path="/usuarios" element={<Usuarios />} />
                    <Route path="/endereco" element={<Endereco />} />
                    <Route path="/pessoa" element={<Pessoas />}/>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;