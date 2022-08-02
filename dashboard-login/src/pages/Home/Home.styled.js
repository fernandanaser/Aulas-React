import styled from 'styled-components';

export const Background = styled.body`
    background-color: #F7F8FC;
    margin: 0;
    display: block;
    
    button {
        margin: 0px 32px 24px 32px;
        width: 150px;
        height: 48px;
        color: #fff;
        background-color: #3751FF;
        border-radius: 8px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #1a2ca5
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