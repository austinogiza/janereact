import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { H2,P} from '../styles/TextStyles'

const Hero = () => {
  return (
    <Slider> 
        <Janehero>
            <Herocontainer>
                <Herotext>Welcome To Jane's Fashion</Herotext>
                <Herebig>"GIVING THE BEST <span>AT THE BEST PRICE"</span></Herebig>
                <Herobutton to='/shop'>Shop Now</Herobutton>
            </Herocontainer>
        </Janehero>
      
        </Slider>
  )
}

const Slider = styled.div`
height: 600px;
width: 100%;
margin: 0 0 24px 0;
`

const Janehero= styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
background: url("https://res.cloudinary.com/jane-s-fashion/image/upload/v1606049649/IMG-20190914-WA0008_fqboty.jpg") no-repeat center center/cover;

position: relative;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
::after{
    position: absolute;
    content: "";
    background: ${themes.overlay};
    top: 0;
    left: 0;
    width: 100%;
height: 100%;
z-index: -1;
 
}
`
const Herocontainer= styled.div`
color: ${themes.white};
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
z-index: 1;
text-align: center;
`
const Herotext= styled(P)`
margin: 8px 0;
`
const Herebig= styled(H2)`
margin: 8px 0;
`
const Herobutton= styled(mainButton)`
margin: 24px 0;
`




export default Hero
