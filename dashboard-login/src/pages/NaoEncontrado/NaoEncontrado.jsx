import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NaoEncontradoContainer } from "./NaoEncontrado.styled";
import notfound from "./naoencontrado.svg"

function NaoEncontrado() {
    const { goHome } = useContext(AuthContext);

    return (
        <NaoEncontradoContainer>
            <h1>૮ ˶•~•˶ ა</h1>
            <h1>404: Não Encontrado</h1>
            <img
                alt="Não encontrado"
                src={notfound}
                style={{
                    marginTop: 50,
                    display: 'inline-block',
                    maxWidth: '100%',
                    width: 560
                }}
            />
            <button onClick={goHome}>Voltar ao início</button>
        </NaoEncontradoContainer>
    )
}
export default NaoEncontrado;