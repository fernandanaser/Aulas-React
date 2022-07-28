import { useEffect, useState } from "react";
import { API } from "../../api";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Pessoas = () => {
  console.log("teste2")
  // ★★ funcao para listar pessoas ★★
  const [pessoas, setPessoas] = useState([]);
  async function listarPessoas() {
    try {
      const { data } = await API.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      setPessoas(data.content);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    listarPessoas();
  }, []);

  function handleDelete() {

  }

  function handleUpdate() {
    // setIsUpdate(true)
  }

  const isUpdate = false;
  console.log("testando")

  return (
    <div>
      <h1>Cadastrar pessoa</h1>
      <Formik>
        <Form>
          <Field name="Nome" type="text" placeholder="Nome"/>
          <Field name="Data de Nascimento" type="text" placeholder="Data de nascimento"/>
          <Field name="CPF" type="text" placeholder="CPF"/>
          <Field name="E-mail" type="text" placeholder="E-mail"/>
          <button>{isUpdate ? "Atualizar" : "Cadastrar"}</button>
        </Form>
      </Formik>

      <h1>Pessoas</h1>
      {pessoas.map(pessoa => (
        <div key={pessoa.idPessoa}>
          <p>Nome: {pessoa.nome}</p>
          <p>Data de nascimento: {pessoa.dataNascimento}</p>
          <p>CPF: {pessoa.cpf}</p>
          <p>E-mail: {pessoa.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Pessoas;