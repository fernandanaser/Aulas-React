import Itensnav from "./Itensnav";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"

const Nav = () => {

  // Validação se tem token
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const { handleLogout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        {/* Se tiver token (está logado) */}
        {!token ?
          (<>
            <Itensnav name="Home" url="/" />
            <Itensnav name="Usuários" url="/usuarios" />
          </>) :
          (<>
            <Itensnav name="Endereço" url="/endereco" />
            <Itensnav name="Cadastrar" url="/pessoa" />
          </>)
        }
      </ul>
      {/* botão sair só é mostrado se estiver logado */}
      {token && <button onClick={handleLogout}>Sair</button>}
    </nav>
  )
}

export default Nav;