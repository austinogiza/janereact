import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { P } from '../styles/TextStyles'

const NotFound = () => {
    return (
       <Notpage>
       <Notfoundcontainer>
  
      <PageNot> 
      <Notimage className="text-4xl lg:text-9xl font-bold  2xl:text-9xl mb-2">404</Notimage>
      <Pagenotp className="text-4xl font-medium text-black">Page Not Found </Pagenotp>
      <PageNoth1 className="text-center mt-2 mb-1 font-normal text-gray-500">The page you are looking for doesn't exist or has been moved.</PageNoth1> 

      
      <Link className="mt-10" to='/' >Go Home</Link></PageNot>
       </Notfoundcontainer>
         
       </Notpage>
    )
}
const Notpage = styled.div`
width: 100%;
height: 500px;`
const Notfoundcontainer = styled.div`
max-width: 500px;
width: 100%;
height:100%;
margin: 24px auto;
padding: 10px 25px;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
`
const Notimage = styled.h1`
color: ${themes.jane};
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
const Pagenotp = styled.h1`
margin: 4px 0;

`

export default NotFound
