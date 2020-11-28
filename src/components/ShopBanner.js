import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { Caption } from '../styles/TextStyles'

const ShopBanner = () => {
    return (
        <Shopbanner>

                <ShopText>Free shipping for orders above &#8358;10,000</ShopText> <ShopNow to='/shop'>Shop Now</ShopNow>

            </Shopbanner>
    )
}

const Shopbanner = styled.div`
height: 30px;
width: 100%;
background: ${themes.jane};
color: ${themes.white};
display: flex; 
justify-content: center;
align-items: center;
padding: 10px;
`
const ShopText = styled(Caption)`

`

const ShopNow = styled(Link)`
background: ${themes.white};
font-size: 12px;
margin: 10px ;
padding: 4px 6px;
border-radius:5px;
box-shadow: ${themes.shadow};
transition: 0.3s ease-in;
:hover{
    background: ${themes.janeBright};
}
`

export default ShopBanner
