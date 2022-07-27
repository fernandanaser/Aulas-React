import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Endereco = () => {
  
  // Fazer o mesmo tratamento de usuarios para exibir endereço apenas se logado
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      navigate("/")
    }
  }, []);

  return (
    // criar um formulário no endereço(com formik)
    <>
    
    </>
  )
}

export default Endereco;