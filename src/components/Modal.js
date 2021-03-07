import React from 'react'
import styled from 'styled-components'
import { ghostButton, mainButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { MdClose} from 'react-icons/md'

const Modal = ({modalClose}) => {
    

  return (
<Background onClick={modalClose}>
<Container>
<Closeicon onClick={modalClose}/>
<Continue onClick={modalClose}>
  Continue Shopping
</Continue>
<Cart to='/cart'>
  View Cart And Checkout
</Cart>
</Container>
</Background>
  )
}

const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
position: fixed;
display: flex;
z-index: 20;
justify-content: center;
align-items: center;
top: 50%;
left: 50%;
z-index: 100;
transform: translate(-50%,-50%);
padding: 10px 15px;
transition: 0.3s all ease-in;

`
const Closeicon = styled(MdClose)`
width: 32px;
height: 32px;
position: absolute;
top: 10px;
right: 10px;
border-radius: 2px;
cursor: pointer;
`

const Container = styled.div`
height: 300px;
width: 100%;
max-width: 600px;
margin: 10px 12px;
padding: 10px 15px;
position: fixed;
top: 50%;
left: 47%;
transform: translate(-50%,-50%);
display: flex;
z-index: 30;
justify-content: center;
align-items: center;
background: ${themes.white};
border-radius: 5px;
@media only screen and (max-width: 650px){
  flex-direction: column;
}
`
const Continue = styled(ghostButton)`
margin: 10px;
`
const Cart = styled(mainButton)`
margin: 10px;
`
export default Modal
