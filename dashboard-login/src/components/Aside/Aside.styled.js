import styled from 'styled-components';

export const Asidehome = styled.aside`
    background-color: #363740;
    width: 255px;
    height: 140vh;
    
    div:first-child {
        display: flex;
        justify-content: space-between;
        padding: 41px 43px;
        align-items: center;
    }

    h2 {
        color: #A4A6B3;
        font-size: 19px;
        letter-spacing: 0.4px;
        opacity: 0.7;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }

    p {
        display: inline;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #A4A6B3;
    }

    svg {
        color: #9FA2B4;
        opacity: 0.4;
        margin-right: 15px;
    }

    div:nth-child(5) {
        margin-top: 40px;
    }
`

export const DivLogo = styled.div`
    width: 50%;
    height: 50%;
`
export const AsideMenu = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    cursor: pointer;

    :hover {
        background-color: #3E4049;
        p, svg {
            color: #DDE2FF
        }
    }

`
