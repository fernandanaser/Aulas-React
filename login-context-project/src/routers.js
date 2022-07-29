import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Endereco from "./pages/Endereco/Endereco";
import Login from "./pages/Login/Login";
import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";
import PessoaDetalhe from "./pages/Pessoas/PessoaDetalhe";
import PessoaForm from "./pages/Pessoas/PessoaForm";
import Pessoas from "./pages/Pessoas/Pessoas";
import Usuarios from "./pages/Usuarios/Usuarios";


const Routers = () => {

    // const { logado } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <AuthProvider>
                {/* <Header /> */}
                <Routes>
                    {/* {!logado ?
                        (<> */}
                            <Route path="/" element={<Login />} />
                            <Route path="/usuarios" element={<Usuarios />} />
                        {/* </>) :
                        (<> */}
                            <Route path="/endereco" element={<Endereco />} />
                            <Route path="/pessoa" element={<Pessoas />} />
                            <Route path="/cadastrar" element={<PessoaForm />}/>
                            <Route path="/editar/:id" element={<PessoaDetalhe />}/>
                        {/* </>)}; */}
                        <Route path="*" element={<NaoEncontrado />}/>
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Routers;