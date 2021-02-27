import styled from "styled-components";
import { themes } from "./ColorStyles";

export const formInput = styled.input`
height: 52px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
border-radius: 5px;
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


export const formSelect = styled.select`
height: 52px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8.39697L12 16.397L20 8.39697" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-position: top 50% right 8px;
background-repeat: no-repeat;
background-size: 9%;
font-size: 14px;
border-radius: 5px;
line-height: 1.42857143;
color: #333333;

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
export const MainTextarea = styled.textarea`
height: 300px;
width: 100%; 
margin: 8px 0;
resize: none;
padding: 8px 12px;
font-size: 14px;
outline: none;
border-radius: 5px;
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