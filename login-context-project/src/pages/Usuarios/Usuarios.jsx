// Páginas agora usando .jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
  // tratamento na pagina usuario: só pode ser exibida quando estiver logado
  // armazenar o token em uma variável, validar se ele existe para mostrar a página usuarios ou voltar para pagina login
  // funcao deslogar para apagar o token
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      navigate("/")
    }
  }, [])

  return (
    <div>Usuarios</div>
  )
}

export default Usuarios;