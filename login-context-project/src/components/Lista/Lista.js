import { API } from "../../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Lista = ({listaPessoas}) => {
    const [list, setList] = useState();
    const navigate = useNavigate();

    async function listarPessoas() {
        try {
          const { data } = await API.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
        } catch (error) {
          console.log(error);
        }
      };

    async function handleDelete(idPessoa) {
        try {
            await API.delete(`/deletar/${idPessoa}`);
            await listarPessoas();
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    function handleUpdate(idPessoa) {
        navigate(`/editar/${idPessoa}`);
        try {
            // deletar
        } catch (error) {
            
        }
    }


    return (
        <div>
            <h1>Pessoas</h1>
            {listaPessoas.map(item => (
                <div key={item.idPessoa}>
                    <p>Nome: {item.nome}</p>
                    <p>Data de nascimento: {item.dataNascimento}</p>
                    <p>CPF: {item.cpf}</p>
                    <p>E-mail: {item.email}</p>
                    <button onClick={() => handleUpdate(item.idPessoa)}>Atualizar</button>
                    <button onClick={() => handleDelete(item.idPessoa)}>Excluir</button>
                </div>
            ))}
        </div>
    )
}
export default Lista;