import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lista from "./components/Lista/Lista";
import { AuthProvider } from "./context/AuthContext";
import { PessoasProvider } from "./context/PessoasContext";
import Endereco from "./pages/Endereco/Endereco";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PessoaForm from "./pages/Login/PessoaForm";
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";
import Usuarios from "./pages/Usuarios/Usuarios";

const Routers = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <PessoasProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastrar" element={<PessoaForm />} />
                        <Route path="/editar/:id" element={<PessoaForm />} />
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="*" element={<NaoEncontrado />} />
                        <Route path="/endereco/:id" element={<Endereco />} />
                    </Routes>
                </PessoasProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;