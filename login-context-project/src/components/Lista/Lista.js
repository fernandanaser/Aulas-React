import { useContext } from "react";
import { EnderecoContext } from "../../context/EnderecoContext";
import { PessoasContext } from "../../context/PessoasContext";


const Lista = ({listaPessoas}) => {
    const { handleDeletePessoa, goUpdate } = useContext(PessoasContext);
    const {goEndereco} = useContext(EnderecoContext);

    return (
        <div>
            {listaPessoas.map(item => (
                <div key={item.idPessoa}>
                    <p>Nome: {item.nome}</p>
                    <p>Data de nascimento: {item.dataNascimento}</p>
                    <p>CPF: {item.cpf}</p>
                    <p>E-mail: {item.email}</p>
                    <button onClick={() => goUpdate(item.idPessoa)}>Atualizar</button>
                    <button onClick={() => handleDeletePessoa(item.idPessoa)}>Excluir</button>
                    <button onClick={() => goEndereco(item.idPessoa)}>Cadastrar endereço</button>
                </div>
            ))}
        </div>
    )
}
export default Lista;