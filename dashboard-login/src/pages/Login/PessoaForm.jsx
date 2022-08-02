import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PessoasContext } from "../../context/PessoasContext";

import { Formik } from "formik";
import moment from "moment";
import { mascaraCPF, mascaraData } from "../../../utils/mascaras";

function PessoaForm() {

  const { id } = useParams();
  const {getPessoaById} = useContext(PessoasContext);
  const [isUpdate, setIsUpdate] = useState();

  const { handleCreatePessoa, handleUpdatePessoa } = useContext(PessoasContext);


  async function listar() {
    if (id) {
      setIsUpdate(true);
      getPessoaById(id);
    }
  }

  useEffect(() => {
    listar();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Atualizar ou Cadastrar</h1>
      {/* <FormularioComponent isUpdate={isUpdate} pessoas={pessoa} id={id} /> */}

      <Formik
            initialValues={{
                nome: "",
                dataNascimento: "",
                cpf: "",
                email: "",
            }}
            onSubmit={(values, actions) => {

                const dadosBackend = {
                    nome: values.nome,
                    cpf: values.cpf.replace(/[^0-9]/gi, ""),
                    dataNascimento: moment(values.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD"),
                    email: values.email
                }

                if(!isUpdate) {
                    handleCreatePessoa(dadosBackend);
                } else {
                    handleUpdatePessoa(dadosBackend, id)
                }
            }}>

            {props => (
                <form onSubmit={props.handleSubmit}>

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nome}
                        name="nome"
                        placeholder="Nome"
                    />

                    <input type="text"
                        mask={mascaraData}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.dataNascimento}
                        name="dataNascimento"
                        placeholder="Data de nascimento"
                    />

                    <input type="text"
                        mask={mascaraCPF}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.cpf}
                        name="cpf"
                        placeholder="CPF"
                    />

                    <input type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                        name="email"
                        placeholder="E-mail"
                    />

                    {props.errors.name &&
                        <div id="feedback">{props.errors.name}</div>}

                    <button type="submit">{isUpdate ? "Atualizar" : "Cadastrar"}</button>
                </form>
            )}
        </Formik>
    </div>
  )
}
export default PessoaForm;