import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,.6) , rgba(0, 0, 0, .6)), url('https://www.trucks.com/wp-content/uploads/2018/04/ford-snow-stuck.jpg') no-repeat;
    color: #fff;
    height: 80.6vh;
    background-position: center;
    background-size: cover;
`;

export const Inner = styled.div`
    padding: 80px 50px;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3rem;
`;

export const SubTitle = styled.p`
    width: 40%;
    margin: 20px auto;
`;

export const ButtonLink = styled(ReactRouterLink)`
    color: #111;
    background: #fff;
    text-decoration: none;
    padding: 6px 10px;
    font-weight: 600;
    border-radius: 4px;
`;

export const Error = styled.div`
    border-left: 2px solid red;
    width: fit-content;
    margin: auto;
    margin-top: 30px; 
    display: flex;
    justify-content: center;
    padding: 10px 5px;
    column-gap: .5em;    
`;

export const ErrorTitle = styled.h3`
    font-weight: 300;
`;

export const ErrorCode = styled.h3`
`;
