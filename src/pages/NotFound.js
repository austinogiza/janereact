import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { H1, P } from '../styles/TextStyles'

const NotFound = () => {
    return (
       <Notpage>
       <Notfoundcontainer>
       <Notimage >
<Imagenot src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606687856/404_aj57py.png" alt="Jane's Fashion 404 Page" />

       </Notimage>
      <PageNot> <PageNoth1>You seem lost.</PageNoth1> <Pagenotp>Page Not Found </Pagenotp><Link to='/'>Go Home</Link></PageNot>
       </Notfoundcontainer>
         
       </Notpage>
    )
}
const Notpage = styled.div`
width: 100%;
height: 700px;`
const Notfoundcontainer = styled.div`
max-width: 600px;
width: 100%;
height:100%;
margin: 24px auto;
padding: 10px 25px;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
`
const Notimage = styled.div`
width: 100%;
height:400px;
`
const Imagenot = styled.img`
width: 100%;
height:100%;
margin: 16px 0;
`

const PageNot = styled.div`
width: 100%;
height:100%;
min-height:100px;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;

a{
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
}
`
const PageNoth1 = styled(P)`
margin: 4px 0;
`
const Pagenotp = styled(H1)`
margin: 4px 0;
color: ${themes.grey};
`

export default NotFound
