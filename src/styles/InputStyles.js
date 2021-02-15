import styled from "styled-components";
import { themes } from "./ColorStyles";

export const formInput = styled.input`
height: 52px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`