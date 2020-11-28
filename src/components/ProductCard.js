import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../images/product.jpg'
import { themes } from '../styles/ColorStyles'
import {  H3, Small } from '../styles/TextStyles'
import {MdSearch, MdShoppingCart} from 'react-icons/md'


const ProductCard = () => {
    return (


<Productwrapper>
            <Productbody>
            <Link > <Productimage src={img} /></Link>
          <Link > <Producttitle>Shoe</Producttitle> </Link>
      
          <Productprice>&#8358;10,000 <strike>&#8358;10,000</strike></Productprice>
         <Productclick>
         <Productadd>
<Productaddicon></Productaddicon>

         </Productadd>
          <Productsearch>
<Productsearchicon></Productsearchicon>

          </Productsearch>
        
         </Productclick>
      </Productbody>
       </Productwrapper>
     
    )
}

const Productwrapper = styled.div`
min-height: 350px;
width: 100%;
max-width: 300px;
border-radius: 10px;

background: ${themes.white};

box-shadow: ${themes.shadow};
transition: 0.3s ease-in;
:hover a{
    color: ${ themes.jane}
}

a{
    color: ${themes.black}
}
`
const Productbody = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;

`
const Productimage = styled.img`
width: 100%;
height: 200px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
const Producttitle = styled(H3)`
padding: 8px 10px ;

`



const Productprice = styled(Small)`
color: ${themes.grey};
padding: 8px 10px ;
cursor: pointer;
strike{
    margin: 0 8px;
}
`

const Productclick = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
padding: 2px 10px;
`
const Productadd =  styled.div`
flex: 1;
background: ${themes.janeBright};
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 4px;
cursor: pointer;
`

const Productsearch = styled.div`
cursor: pointer;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
background: ${themes.blueLight};
margin: 0 4px;
flex: 0 0 30%;`




const Productaddicon = styled(MdShoppingCart)`

width: 24px;
height: 24px;

color: ${themes.jane};

`

const Productsearchicon =  styled(MdSearch)`

width: 32px;
height: 32px;
color: ${themes.blue};

`

export default ProductCard
