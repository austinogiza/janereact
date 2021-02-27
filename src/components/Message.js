import React, {useEffect, useState} from 'react'
import styled from  'styled-components'
import { themes } from '../styles/ColorStyles'
import {GrClose} from 'react-icons/gr'
const Message = ({message}) => {
const [remove, setRemove]= useState(false)
    useEffect(() => {
        setTimeout(() => {
            setRemove(true)
        }, 1000);
       
    }, [])
    return (
       <Messagebox remove={remove}>
     <MessageDetails>
     <p>{message}</p>
<Close onClick={()=>setRemove(false)}> <Closeicon/></Close>
    
     </MessageDetails>
            
        </Messagebox>
    )
}

const Messagebox = styled.div`
width: 100%;
height: 40px;
transition: .4s ease-out;
transition-property:background; 
background: ${themes.green};
position: fixed;
display: ${props => props.remove ? "block": 'none'};
top: 0;
left: 0;


`
const MessageDetails = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
p{
    font-size:17px;
    color: ${themes.white};
}
`

const Close = styled.div`
width: 32px;
height: 32px;
background: ${themes.janeBright};
display: flex;
position: absolute;
justify-content: center;
align-items: center;
border-radius: 50%;
right: 20%;
`
const Closeicon = styled(GrClose)`

width: 18px;
height: 18px;
color: ${themes.jane};
`
export default Message
