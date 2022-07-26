// Páginas agora usando .jsx

// importar usecontext authcontext na pagina login
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// formik: importar useformik na page login
import { useFormik } from "formik";

const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    console.log(handleLogin, "testeee")
    // definir valores
    const formik = useFormik({
        initialValues: {
            login: "",
            senha: ""
        },
        // definir onsubmit
        onSubmit: values => {
            handleLogin(values);
        }
    })
    return (
        // retornar o form (com padrão de handlesubmit)
        <form onSubmit={formik.handleSubmit}>
            {/* definir os labels e inputs. No input id e name são obrigatórios */}
            <label htmlFor="login">Usuário</label>
            <input
            type="text"
            name="login"
            id="login"
            onChange={formik.handleChange}
            value={formik.values.login}
            />

            <label htmlFor="senha">Senha</label>
            <input
            type="password"
            name="senha"
            id="senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
            />

            <button type="submit">Entrar</button>
        </form>
    )
}

export default Login;