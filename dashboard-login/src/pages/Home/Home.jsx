import Lista from "../../components/Lista/Lista";
import { FaSistrix, FaBell, FaSortAmountUp, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { Background, HeaderPessoas, PaginaHome, DivImg, BoxPessoas, Toptitulo } from "./Home.styled";
import usuario from "./usuario.png"
import { useContext, useEffect } from "react";
import { PessoasContext } from "../../context/PessoasContext";



function Home() {
    const { getPessoas, pessoas } = useContext(PessoasContext)
    // const {  pessoas } = useContext(PessoasContext);
    const navigate = useNavigate();

    // ★★ funcao para ir para cadastrar ★★
    function goCadastrar() {
      navigate("/cadastrar");
    }

    // Listar
    async function setup() {
        getPessoas();
      }
      useEffect(() => {
        setup();
      }, []);

    return (
        <>
            <PaginaHome>
                <Aside />
                <Background>
                    <HeaderPessoas>
                        <div>
                            <h1>Pessoas</h1>
                        </div>
                        <div>
                            <FaSistrix />
                            <FaBell />
                            <h3>Usuário</h3>
                            <DivImg>
                                <img width="48px" src={usuario} alt="Usuário" />
                            </DivImg>
                        </div>
                    </HeaderPessoas>
                    <BoxPessoas>
                        <div>
                            <h3>Todas as pessoas</h3>
                            <div>
                                <FaSortAmountUp />
                                <small>Sort</small>
                                <FaFilter />
                                <small>Filter</small>
                            </div>
                        </div>
                        <Toptitulo>
                            <p>Nome</p>
                            <p>Data de Nascimento</p>
                            <p>CPF</p>
                            <p>E-mail</p>
                            <p> Ação</p>
                        </Toptitulo>

                        {/* Aqui vai a listagem das pessoas */}
                        {/* { <Lista listaPessoas={getPessoas()} /> } */}
                        {/* <Lista listaPessoas={pessoas} /> */}
                        <Lista listaPessoas={pessoas} />


                    </BoxPessoas>
                        <button onClick={goCadastrar}>Cadastrar Pessoa</button>
                </Background>
            </PaginaHome>
        </>
    )
}
export default Home;