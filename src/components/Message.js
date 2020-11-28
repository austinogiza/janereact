import React from 'react'
import styled from  'styled-components'
const Message = ({message}) => {
    return (
       <Messagebox>
       <p> {message}</p>
            
        </Messagebox>
    )
}

const Messagebox = styled.div`
width: 100%;
height: 50px;
position: fixed;
top: 20%;
left: 0;
p{
    font-size:18px;
}

`

export default Message
