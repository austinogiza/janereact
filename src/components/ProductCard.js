import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { medium, SmallCaption, H2 } from '../styles/TextStyles'
import {MdShoppingCart} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'


const ProductCard = ({img,title, price,discount, cardAdd, cardSearch, desc, slug}) => {


    return (
            <Productwrapper className="productwrapper">
            <Productbody>
    <Productsearch onClick={cardSearch}>
    <Productsearchicon color="#fff"/>
    <Productimage src={img} />
    </Productsearch>
          <Link to={slug}> <Producttitle>{title}</Producttitle> </Link>
         <Productclick>
        <Productpricecover>
        <Productprice><MainPrice>&#8358;{Number(parseFloat(`${price}`).toFixed(3)).toLocaleString()} </MainPrice>
       <Discount> <strike>&#8358;{Number(parseFloat(`${discount}`).toFixed(3)).toLocaleString()}</strike></Discount></Productprice>
        </Productpricecover>
         <Productadd>
         <Productaddbutton onClick={cardAdd}>
         <Productaddicon />
         </Productaddbutton>
         
            </Productadd>
         </Productclick>
      </Productbody>
       </Productwrapper>
     
    )
}

const Productwrapper = styled.div`
height: 500px;
width: 100%;
max-width: 350px;
margin: 0 auto;
border-radius: 5px;
box-shadow: 0 2 24px rgba(0,0,0,0.05);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: ${themes.white};
transition: 0.4s ease-in;
:hover a{
    color: ${ themes.black};
    text-decoration: underline;
}

a{
    color: ${themes.black}
}

@media only screen and (max-width: 650px){
    height: 450px;
}
`

const Productbody = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
/* padding: 0 0 20px 0; */
`
const Productimage = styled.img`
width: 100%;
height: 280px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
const Producttitle = styled(medium)`
margin: 16px 0;
min-height: 48px;
`


const Productpricecover = styled.div`
width: 100%;
flex: 0 0 50%;
min-height: 50px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;

`
const MainPrice = styled(H2)`
width: 100%;
min-height: 20px;
color: ${themes.black};
margin: 4px 0;
`
const Discount = styled(SmallCaption)`
strike{
    margin: 0;
}
color: ${themes.black};
`
const Productprice = styled(SmallCaption)`
color: ${themes.grey};
margin: 8px;
min-height: 20px;
cursor: pointer;
`

const Productclick = styled.div`
width: 100%;
height: 56px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 0;
margin: 16px 0 0 0;
`
const Productadd =  styled.div`
flex: 1;
height:100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 4px;
cursor: pointer;
`
const Productaddbutton = styled(productButton)``

const Productsearch = styled.div`
cursor: pointer;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
background: ${themes.blueLight};
margin: 0 4px;
width: 100%;
height: 280px;
position: relative;
transition: 0.4s ease-in;
::after{
    opacity: 0;
    transition: 0.4s ease-in;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
}
:hover::after{
    opacity: 1;
}
`




const Productaddicon = styled(MdShoppingCart)`

width: 24px;
height: 24px;
color: ${themes.jane};

`

const Productsearchicon =  styled(BsSearch)`
width: 40px;
height: 40px;
position: absolute;
opacity: 0;
z-index: 10;
transition: 0.4s ease-in;
${Productsearch}:hover &{
    opacity: 1; 
}
`

export default ProductCard
