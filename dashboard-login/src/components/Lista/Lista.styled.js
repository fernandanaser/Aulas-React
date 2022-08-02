import styled from 'styled-components';

export const ContainerLista = styled.div`
    box-sizing: border-box;
    width: 82vw;
    height: 100%;
    margin: auto;
    padding: 24px 32px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: flex-start;
    padding: 0;
    justify-content: center;


`

export const ItensCard = styled.div`
    width: 75vw;
    display: grid;
    gap: 30px;
    margin: 0 auto;
    padding: 0;
    border-bottom: 1px solid #DFE0EB;
    cursor: pointer;
    :hover {
        background: #F7F8FF;
    }
    img {
        margin-left: -70px;
        margin-right: 15px;
    }

    p {
        width: 180px;
        color: #252733;
    }

`
export const Dados = styled.div`
    background-color: brown;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    p {
        margin-left: 20px;
    }
`

export const Botoes = styled.div`
    max-width: 250px;
    display: flex;
    justify-content: center;
    button {
        width: 85px !important;
        margin: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:first-child {
        background-color: #FEC400;
        border-radius: 2em;
        padding: 5px;
        :hover{
            background-color: #a18a3b
        }
    }
    button:nth-child(2) {
        background-color: #F12B2C;
        border-radius: 2em;
        padding: 5px;
        :hover {
            background-color: #d13535
        }
    }
    button:nth-child(3) {
        background-color: #29CC97;
        border-radius: 2em;
        padding: 5px;
        :hover {
            background-color: #22aa7d;
        }
    }
`
