// Páginas agora usando .jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect } from "react";
import { AuthContext } from '../../context/AuthContext';

// Usar yup para validar os campos do form
const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Muito curto, deve possuir no mínimo 2 caracteres.')
        .max(50, 'Muito longo, deve possuir no máximo 50 caracteres.')
        .required('Este campo é obrigatório.'),
    senha: Yup.string()
        .min(2, 'Senha muito curta, deve possuir no mínimo 2 caracteres.')
        .max(50, 'Senha muito longa, deve possuir no máximo 50 caracteres.')
        .required('Este campo é obrigatório.'),
});

const Login = () => {
    const { handleLogin} = useContext(AuthContext);

    // na pagina login ver se tem token ou não para mostrar ou não o button sair
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {

        }
      }, []);

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    login: '',
                    senha: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label>Nome</label>
                        <Field name="login" />
                        {errors.login && touched.login ? (
                            <div>{errors.login}</div>
                        ) : null}

                        <label>Senha</label>
                        <Field name="senha" type="password"/>
                        {errors.senha && touched.senha ? (
                            <div>{errors.senha}</div>
                        ) : null}

                        <button type="submit" onClick={handleLogin}>Entrar</button>
                    </Form>
                )}
            </Formik>
        </div>

        // retornar o form (com padrão de handlesubmit)
        // <form onSubmit={formik.handleSubmit}>
        //     {/* definir os labels e inputs. No input id e name são obrigatórios */}
        //     <label htmlFor="login">Usuário</label>
        //     <input
        //     type="text"
        //     name="login"
        //     id="login"
        //     onChange={formik.handleChange}
        //     value={formik.values.login}
        //     />

        //     <label htmlFor="senha">Senha</label>
        //     <input
        //     type="password"
        //     name="senha"
        //     id="senha"
        //     onChange={formik.handleChange}
        //     value={formik.values.senha}
        //     />

        //     <button type="submit">Entrar</button>
        // </form>
    )
}

export default Login;