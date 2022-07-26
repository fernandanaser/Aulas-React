const Eventos = ({numero}) => {
    const meuEvento = (num) => {
        console.log(`Foi clicado ${numero} ${num}`)
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={() => meuEvento(20)}>Ativar</button>
        </div>
    )
}

export default Eventos;