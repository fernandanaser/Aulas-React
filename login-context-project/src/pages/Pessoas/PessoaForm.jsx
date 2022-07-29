import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api";
import { Formik } from "formik";

function PessoaForm() {
  const { id } = useParams();
  const [pessoas, setPessoas] = useState();
  const [isUpdate, setIsUpdate] = useState();

  async function listar() {
    if (id) {
      setIsUpdate(true)
    }
    try {
      const { data } = await API.get(`/pessoa/lista-completa?idPessoa=${id}`)
      setPessoas(data)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    // importar as máscaras
    <div>
      <Formik
        initialValues={{ nome: "" }}
        onSubmit={(values, actions) => {
          // fazer um ternário
        }}>

        {props => (
          <form onSubmit={props.handleSubmit}>
            <input type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
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