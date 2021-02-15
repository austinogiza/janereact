import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { themes } from '../styles/ColorStyles'
import {  product, Small } from '../styles/TextStyles'
import {MdSearch, MdShoppingCart} from 'react-icons/md'


const ProductCard = ({img,title, price,discount, cardAdd, cardSearch}) => {

  

    return (


<Productwrapper className="productwrapper">
            <Productbody>
            <Link > <Productimage src={img} /></Link>
          <Link > <Producttitle>{title}</Producttitle> </Link>
      
          <Productprice>&#8358;{price}<strike>&#8358;{discount}</strike></Productprice>
         <Productclick>
         <Productadd  onClick={cardAdd}>

<Productaddicon>

</Productaddicon>

         </Productadd>
          <Productsearch onClick={cardSearch}>
<Productsearchicon></Productsearchicon>

          </Productsearch>
        
         </Productclick>
      </Productbody>
       </Productwrapper>
     
    )
}

const Productwrapper = styled.div`
min-height: 250px;
width: 100%;
max-width: 300px;
margin: 0 auto;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
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
padding: 0 0 20px 0;
`
const Productimage = styled.img`
width: 100%;
height: 200px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
const Producttitle = styled(product)`
padding: 8px 10px;

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
