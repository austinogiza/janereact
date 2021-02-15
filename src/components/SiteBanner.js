import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'

const SiteBanner = () => {
    return (
        <Shopbannercontainer>
<Shopimage src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606570769/1591554638714_bo7y9h.jpg">

</Shopimage>

            </Shopbannercontainer>

    )
}


const Shopbannercontainer = styled.div`
height: 300px;
width: 100%;
max-width: 1200px;
margin: 24px auto;
`
const Shopimage = styled.img`
height:100%;
width: 100%;
z-index: 1;
position: relative;
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
export default SiteBanner
