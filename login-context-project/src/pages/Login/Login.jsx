// Páginas agora usando .jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect } from "react";
import { AuthContext } from '../../context/AuthContext';
import Logo from '../../components/Header/Logo';
import { LoginContainer } from './Login.styled';


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
        
        <LoginContainer>
            <Logo />
            <h2>Dashboard Kit</h2>
            <h1>Log In to Dashboard Kit</h1>
            <small>Enter your email and password below</small>
            <Formik
                initialValues={{
                    login: '',
                    senha: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    handleLogin(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="login">USUÁRIO</label>
                        <Field id="login" name="login" />
                        {errors.login && touched.login ? (
                            <div>{errors.login}</div>
                        ) : null}

                        <label htmlFor="senha">SENHA</label>
                        <Field id="senha" name="senha" type="password"/>
                        {errors.senha && touched.senha ? (
                            <div>{errors.senha}</div>
                        ) : null}

                        <button type="submit">Log In</button>
                    </Form>
                )}
            </Formik>
            <small>Don't have an account? <strong>Sign up</strong></small>

        </LoginContainer>
    )
}

export default Login;