import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "./ColorStyles";



export const mainButton = styled(Link)`
width: 210px;
height: 54px;
background: ${themes.jane};
color: ${themes.white};
outline: none;
border: none;
font-size: 16px;
text-align: center;
font-weight: 500;
display: flex;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
justify-content: center;
align-items: center;
border-radius: 10px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.hoverJane};
    }
`
export const wideButton = styled(Link)`
width: 100%;
height: 54px;
max-width: 800px;
background: ${themes.jane};
color: ${themes.white};
outline: none;
border: none;
font-size: 16px;
text-align: center;
font-weight: 500;
display: flex;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
justify-content: center;
align-items: center;
border-radius:10px;
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
border-radius: 10px;
letter-spacing: 1px;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.hoverJane};
    }
`

export const ghostButton = styled(Link)`
width: 210px;
height: 54px;
background: ${themes.white};
color: ${themes.jane};
outline: none;
border: 1px solid ${themes.jane};
font-size: 16px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);

border-radius: 10px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.janeBright};
        color: ${themes.jane}
    }
`