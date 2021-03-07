import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "./ColorStyles";



export const mainButton = styled(Link)`
  font-family: "Mulish", sans-serif;
width: 210px;
height: 54px;
background: ${themes.black};
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
border-radius: 15px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
    }
`
export const wideButton = styled(Link)`
  font-family: "Mulish", sans-serif;
width: 100%;
height: 54px;
max-width: 800px;
background: ${themes.black};
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
border-radius:15px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
    }
`

export const submitButton = styled.button`
width: 100%;
font-family: "Mulish", sans-serif;
height: 54px;
background: ${themes.black};
color: ${themes.white};
outline: none;
border: none;
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
letter-spacing: 1px;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
    }
`
export const couponButton = styled.button`
width: 100%;
max-width: 120px;
height: 54px;
background: ${themes.black};
color: ${themes.white};
outline: none;
border: none;
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
letter-spacing: 1px;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
    }
`

export const ghostButton = styled(Link)`
width: 210px;
height: 54px;
background: ${themes.white};
color: ${themes.black};
outline: none;
border: 1px solid ${themes.black};
font-size: 16px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05);

border-radius: 15px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
        color: ${themes.black}
    }
`

export const blackLikeButton = styled.button`
max-width: 100px;
height: 54px;
width:100%;
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

border-radius: 15px;
letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.4s ease-in;
    :hover{
        background: ${themes.blackLight};
        color: ${themes.black}
    }
`

export const productButton = styled.button`
width: 100%;
font-family: "Mulish", sans-serif;
height: 54px;
background: ${themes.janeBright};
color: ${themes.white};
outline: none;
border: none;
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
/* box-shadow: 0px 4px 24px 0 rgba(0,0,0,0.05); */
text-transform: uppercase;
transition: 0.4s ease-out;
transition-property: background border;
:hover{
    outline: none;
        background: ${themes.white};
        border: 2px solid ${themes.jane};
        color: ${themes.jane};
    }
`

export const smallButton = styled(Link)`
  font-family: "Mulish", sans-serif;
width: 130px;
height: 40px;
background: ${themes.black};
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
        background: ${themes.blackLight};
    }
`