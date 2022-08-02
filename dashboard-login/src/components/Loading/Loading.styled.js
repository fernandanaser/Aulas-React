import styled from 'styled-components';

export const Body = styled.body`
    margin: 0;
`

export const Loader = styled.div`
    
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`