import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import side from '../images/side.JPG'
import img from '../images/right.JPG'
import {H2 } from '../styles/TextStyles'
import { mainButton } from '../styles/Button'
import { Link } from 'react-router-dom'

const Display = () => {
    return (
        <Displaycover>

<Displaycontainer>
<Displayleft>
<Displaytext>
Plenty to choose from
</Displaytext>
<Link to='/shop'><Displaybutton>Shop Now</Displaybutton></Link>

</Displayleft>
    <Displayright>
    <Displaytext>
    Amazing quality
</Displaytext>
<Link to='/shop'>
<Displaybutton>Shop Now</Displaybutton></Link>

    </Displayright>
</Displaycontainer>
</Displaycover>
    )
}

const Displaycover = styled.div`
min-height: 300px;
width: 100%;
`
const Displaycontainer = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 50px;
grid-auto-rows: minmax(200px,auto);
width: 100%;

height: 100%;
padding: 10px 25px;
max-width: 1200px;
margin: 0 auto;

@media only screen and (max-width: 550px){
    grid-template-columns: repeat(1,1fr);
}
`
const Displayleft = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
border-radius: 15px;
width: 100%;
height: 100%;
background: url(${img}) no-repeat center center/ cover;
position: relative;
z-index: 1;
padding: 10px 25px;
::after{
    position: absolute;
    content: "";
    border-radius: 15px;
    background: ${themes.black};
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
    top: 0;
    left: 0;
}

@media only screen and (max-width: 550px){
    align-items: center;
}
`
const Displayright = styled.div`
border-radius: 15px;
width: 100%;
height: 100%;
background: url(${side}) no-repeat center center/ cover;
position: relative;
z-index: 1;
padding: 10px 25px;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
::after{
    position: absolute;
    content: "";
    border-radius: 15px;
    background: ${themes.black};
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
    top: 0;
    left: 0;
}
@media only screen and (max-width: 550px){
    align-items: center;
}
`
const Displaytext = styled(H2)`
color: ${themes.white};
text-align: center;
margin: 8px 0;

`
const Displaybutton = styled(mainButton)``
export default Display
