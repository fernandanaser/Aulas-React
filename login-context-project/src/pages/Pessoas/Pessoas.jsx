import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lista from "../../components/Lista/Lista";
import { PessoasContext } from "../../context/PessoasContext";

const Pessoas = () => {
  const { getPessoas, pessoas } = useContext(PessoasContext);
  const navigate = useNavigate();

  // ★★ funcao para listar pessoas ★★
  async function listarPessoas() {
    getPessoas();
  }

  useEffect(() => {
    listarPessoas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ★★ funcao para ir para cadastrar ★★
  function goCadastrar() {
    navigate("/cadastrar");
  }

  return (
    <div>
      <button onClick={goCadastrar}>Cadastrar</button>
      <h1>Lista de pessoas</h1>
      <Lista listaPessoas={pessoas} />
    </div>
  )
}

export default Pessoas;