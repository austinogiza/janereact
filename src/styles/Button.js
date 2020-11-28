import styled from "styled-components";
import { themes } from "./ColorStyles";


export const mainButton = styled.a`
width: 200px;
height: 54px;
background: ${themes.jane};
color: ${themes.white};
outline: none;
border: none;
font-size: 16px;
font-weight: 500;
display: flex;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
justify-content: center;
align-items: center;
border-radius: 5px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.hoverJane};
    }
`

export const submitButton = styled.button`
width: 100%;
height: 54px;
background: ${themes.jane};
color: ${themes.white};
outline: none;
border: none;
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
letter-spacing: 1px;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.hoverJane};
    }
`