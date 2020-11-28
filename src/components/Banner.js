import React from 'react'
import styled from 'styled-components'
import {H2 } from '../styles/TextStyles'
import img from '../images/slider.jpg'
import { themes } from '../styles/ColorStyles'

const Banner = () => {
    return (
        <Bannersection>

   <Bannerimage>
   <Bannertext>
We give you the best

        </Bannertext>
   </Bannerimage>
        </Bannersection>
    )
}

const Bannersection = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 400px;
width: 100%;
margin: 24px 0;

`

const Bannerimage = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
background: url(${img}) no-repeat center center/cover;
position: relative;
z-index: 1;
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
`

const Bannertext = styled(H2)`
text-align: center;
color: ${themes.white};
`
export default Banner
