// Páginas agora usando .jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';


const CadastroUsuarioSchema = Yup.object().shape({

 });

const Usuarios = () => {
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