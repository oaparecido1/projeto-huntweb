import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 60px;
    background: #da552f;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => `${props.fontSize}px`}

    h1 { 
       font-family: Arial, Helvetica, sans-serif;
    }
`;