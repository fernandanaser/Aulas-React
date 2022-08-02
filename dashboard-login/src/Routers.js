import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lista from "./components/Lista/Lista";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const Routers = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    {/* testanto a lista */}
                    <Route path="lista" element={<Lista />}/>
                    {/* <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/cadastrar" element={<PessoaForm />} />
                <Route path="/editar/:id" element={<PessoaForm />} />
                <Route path="/endereco/:id" element={<EnderecoForm />} />
                <Route path="*" element={<NaoEncontrado />} /> */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;