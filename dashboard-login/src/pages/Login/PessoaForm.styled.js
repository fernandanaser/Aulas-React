import styled from 'styled-components';

export const Background = styled.body`
    background-color: #F7F8FC;
    margin: 0;
    display: block;
    height: 100vh;
    button {
        margin: 0px 32px 24px 32px;
        width: 80px;
        height: 48px;
        color: #fff;
        border-radius: 8px;
        border: none;
        cursor: pointer;
    }

    button:first-child {
        background-color: #29CC97;
        :hover{
            background-color: #22aa7d;
        }
    }

    button:last-child {
        background-color: #F12B2C;
        margin-left: -10px;
        :hover{
            background-color: #d13535;
        }
    }

    input {
        box-sizing: border-box;
        height: 42px;
        margin-bottom: 24px;
        background-color: #FCFDFE;
        border-radius: 8px;
        border: 1px solid #6f7491;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        color: #0f0d0d;
        opacity: 0.8;
        display: flex;
        align-items: center;
        padding-left: 10px;
        margin-right: 20px;
    }

    form {
        margin-left: 20px;
        display: grid;
        grid-template-columns: 350px 263px 270px 230px 70px;
        padding: 20px 10px;
    }
    div:nth-child(3) div {
        display: flex;
        justify-content: space-between;
        margin: auto;
    }
`

export const PaginaHome = styled.div`
    display: flex;
    flex-direction: row;
`

export const HeaderPessoas = styled.div`
    display: grid;
    grid-template-columns: 8fr 2fr;
    width: 82vw;
    margin: 26px 35px;

    div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    svg {
        color: #C5C7CD;
        font-size: 20px;
        cursor: pointer;
    }

    svg:last-child {
        font-size: 44px;
    }

    h3 {
        border-left: 1px solid #DFE0EB;
        padding-left: 20px;
        color: #252733;
    }

    h1 {
        color: #252733;
    }
`

export const DivImg = styled.div`
    background-color: #3E4049;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    cursor: pointer;
    :hover {
        background-color: #565861;
    }
`

export const BoxPessoas = styled.div`
    width: 82vw;
    margin: 26px 35px;
    box-sizing: border-box;

    position: relative;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: #FFFFFF;
    border: 1px solid #DFE0EB;
    border-radius: 8px;

    div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 32px 10px 32px;
        div {
            display: flex;
            align-items: center;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 19px;
        line-height: 24px;
        letter-spacing: 0.4px;
        color: #252733;
    }
    svg {
        color: #C5C7CD;
        padding: 0 10px 0 34px;
    }

    small {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #4B506D;
    }
`
export const Toptitulo = styled.div`
    display: grid;
    grid-template-columns: 320px 235px 235px 230px 70px;
    gap: 30px;
    padding: 0 32px 10px 32px;
    border-bottom: 1px solid #DFE0EB;
    p {
        text-align: left;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.2px;
        color: #9FA2B4;
    }

`