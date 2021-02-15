import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {GrClose} from 'react-icons/gr'


const ProductModal = ({closePop, anime}) => {

  return (
   
    <Background>
    
  
      <Container>
      <Closecover onClick={closePop}>  <Closeicon/></Closecover>
    
        <Image>

        </Image>
        <Details>
          <Title><Titleh1></Titleh1></Title>
          <Titledesc></Titledesc>

        </Details>
      </Container>
    </Background>

  )
}

const Background = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 50%;
left: 50%;
z-index: 100;
transform: translate(-50%,-50%);
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 15px;
transition: 0.3s all ease-in;

`

const Container = styled.div`
position: relative;
max-width: 800px;
margin: 0 auto;
width: 100%;
height: 600px;
background: ${themes.offWhite};
transition: 0.3s all ease-in;
display: grid;
grid-template-columns: repeat(2, minmax(10px,1fr));
grid-auto-rows: minmax(250px,auto);
@media only screen and (max-width:650px){
  grid-template-columns: repeat(1, minmax(10px,1fr));
}
`

const Closecover = styled.div`
position: absolute;
top: 20px;
right: 20px;
height:60px;
width: 60px;
cursor: pointer;
background: ${themes.white};
color: ${themes.white};
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
transition: all 0.3s ease-in;
:hover{
  box-shadow: ${themes.shadow};

}
`
const Closeicon = styled(GrClose)`
height:24px;
width: 24px;
color: ${themes.black};
`
const Image = styled.div``
const Details = styled.div``
const Title = styled.div``
const Titleh1 = styled.div``
const Titledesc = styled.div``

export default ProductModal
