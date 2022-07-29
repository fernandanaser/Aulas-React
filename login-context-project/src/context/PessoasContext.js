
import { createContext, useEffect, useState } from "react";
import { API, APICEP } from "../api";

const PessoasContext = createContext();

function PessoasProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(true);


    async function handleAddress(usuario) {
        try {
            await API.post("/auth/endereco", usuario)
            alert("Endereço cadastrado com sucesso!")
            window.location.href = "/endereco";
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }

    async function handleCep(values) {
        const cep = values.cep.slice(0, 5) + values.cep.slice(6);
        try {
            const { data } = await APICEP.get(`/${cep}/json/`);
            values.bairro = data.bairro;
            values.logradouro = data.logradouro;
            values.estado = data.uf;
            values.complemento = data.complemento;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PessoasContext.Provider value={{ handleAddress, logado, handleCep }}>
            {children}
        </PessoasContext.Provider>
    )
}

export { PessoasProvider, PessoasContext };