import { useContext, useEffect, useState } from "react";
import { API } from "../../api";
// import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import Lista from "../../components/Lista/Lista";
import { AuthContext } from "../../context/AuthContext";
// import * as Yup from 'yup';

const Pessoas = () => {
  const {setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const [pessoas, setPessoas] = useState([]);

  // ★★ funcao para listar pessoas ★★
  async function listarPessoas() {
    setLoading(true);
    try {
      const { data } = await API.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
      setPessoas(data.content);
      setLoading(false);
    } catch (error) {
      alert(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    listarPessoas();
  }, []);



  function handleCreate() {
    navigate("/cadastrar")
  }

  // const isUpdate = false;

  return (
    <div>
      <button onClick={handleCreate}>Cadastrar</button>
      <h1>Lista de pessoas</h1>
      <Lista listaPessoas={pessoas}/>
      {/* <h1>Cadastrar pessoa</h1>
      AJUSTAR ESSE FORMIK
      <Formik>
        <Form>
          <Field name="Nome" type="text" placeholder="Nome"/>
          <Field name="Data de Nascimento" type="text" placeholder="Data de nascimento"/>
          <Field name="CPF" type="text" placeholder="CPF"/>
          <Field name="E-mail" type="text" placeholder="E-mail"/>
          <button>{isUpdate ? "Atualizar" : "Cadastrar"}</button>
        </Form>
      </Formik> */}


    </div>
  )
}

export default Pessoas;