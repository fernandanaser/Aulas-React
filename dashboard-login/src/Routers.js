import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/pessoa" element={<Pessoas />} />
                <Route path="/cadastrar" element={<PessoaForm />} />
                <Route path="/editar/:id" element={<PessoaForm />} />
                <Route path="/endereco/:id" element={<EnderecoForm />} />
                <Route path="*" element={<NaoEncontrado />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;