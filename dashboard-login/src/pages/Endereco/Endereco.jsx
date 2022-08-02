import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PessoasContext } from "../../context/PessoasContext";
import { Background, HeaderPessoas, PaginaHome, BoxPessoas, Radio } from "./Endereco.styled";
import { FaSistrix, FaBell } from "react-icons/fa";

import { Formik } from "formik";
import moment from "moment";
import { mascaraCPF, mascaraData } from "../../mascaras";
import Aside from "../../components/Aside/Aside";

function Endereco() {
    const { id } = useParams();
    const { getEndereco, handleCreateEndereco, handleUpdateEndereco } = useContext(PessoasContext);
    const [isUpdate, setIsUpdate] = useState();

    function goHome() {
        window.location.href = "/home";
    }

    return (
        <>
            <>
                <PaginaHome>
                    <Aside />
                    <Background>
                        <HeaderPessoas>
                            <div>
                                <h1>Endereço</h1>
                            </div>
                            <div>
                                <FaSistrix />
                                <FaBell />
                                <h3>Usuário</h3>
                            </div>
                        </HeaderPessoas>
                        <BoxPessoas>
                            <div>
                                <h3>Insira o endereço abaixo</h3>
                            </div>


                            <div>
                                {<Formik
                                    initialValues={{
                                        tipo: "",
                                        logradouro: "",
                                        numero: "",
                                        complemento: "",
                                        cep: "",
                                        cidade: "",
                                        estado: "",
                                        pais: "",

                                    }}
                                    onSubmit={(values, actions) => {

                                        const dadosBackend = {
                                            tipo: values.tipo,
                                            logradouro: values.logradouro,
                                            numero: values.numero,
                                            complemento: values.complemento,
                                            cep: values.cep.replace(/[^0-9]/gi, ""),
                                            cidade: values.cidade,
                                            estado: values.estado,
                                            pais: values.pais,
                                        }

                                        if (!isUpdate) {
                                            handleCreateEndereco(dadosBackend);
                                        } else {
                                            handleUpdateEndereco(dadosBackend, id)
                                        }
                                    }}>

                                    {props => (
                                        <form onSubmit={props.handleSubmit}>
                                            <Radio>
                                                <div>
                                                    <label htmlFor="tipo">
                                                        <input type="radio"
                                                            onChange={props.handleChange}
                                                            onBlur={props.handleBlur}
                                                            value={props.values.tipo}
                                                            name="tipo"
                                                        /> RESIDENCIAL
                                                    </label>
                                                </div>
                                                <div>
                                                    <label htmlFor="tipo">
                                                        <input type="radio"
                                                            onChange={props.handleChange}
                                                            onBlur={props.handleBlur}
                                                            value={props.values.tipo}
                                                            name="tipo"
                                                        /> COMERCIAL

                                                    </label>
                                                </div>
                                            </Radio>

                                            <label htmlFor="logradouro">Logradouro</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.logradouro}
                                                name="logradouro"
                                                placeholder="Logradouro"
                                            />
                                            <label htmlFor="numero">Número</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.numero}
                                                name="numero"
                                                placeholder="Número"
                                            />

                                            <label htmlFor="complemento">Complemento</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.complemento}
                                                name="complemento"
                                                placeholder="Complemento"
                                            />

                                            <label htmlFor="cep">CEP</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cep}
                                                name="cep"
                                                placeholder="CEP"
                                            />

                                            <label htmlFor="cidade">Cidade</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cidade}
                                                name="cidade"
                                                placeholder="Cidade"
                                            />

                                            <label htmlFor="estado">Estado</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.estado}
                                                name="estado"
                                                placeholder="Estado"
                                            />

                                            <label htmlFor="pais">Pais</label>
                                            <input type="text"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.pais}
                                                name="pais"
                                                placeholder="Pais"
                                            />

                                            {props.errors.name &&
                                                <div id="feedback">{props.errors.name}</div>}

                                            <div>
                                                <button type="submit">{isUpdate ? "Atualizar" : "Cadastrar"}</button>
                                                <button onClick={goHome}>Cancelar</button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>}
                            </div>

                        </BoxPessoas>
                    </Background>
                </PaginaHome>
            </>





        </>
    )
}
export default Endereco;