import styled from 'styled-components';

export const NaoEncontradoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    img {
        margin-bottom: 60px;
    }
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