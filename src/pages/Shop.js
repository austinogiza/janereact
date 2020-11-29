import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Bonus from '../components/Bonus'
import Pageloading from '../components/Pageloading'
import ProductCard from '../components/ProductCard'
import { themes } from '../styles/ColorStyles'
import {H2, H3, Small } from '../styles/TextStyles'


const Shop = () => {

    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
     }, [])

    return (
        <div>
            

                <Shopbannercontainer>
<Shopimage src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606570769/1591554638714_bo7y9h.jpg">

</Shopimage>

            </Shopbannercontainer>

<ShopTitle>
    <ShopTitletext>Shop</ShopTitletext>


</ShopTitle>
            <Productionsection>

                <Productfilter>
<Filtertitle>
<Filterh2>Filter Search</Filterh2>
</Filtertitle>
<Filtersection>
    <Filtertop>
        <Filterh3>Price</Filterh3> 
        <Filterbutton>Filter</Filterbutton>
    </Filtertop>

    <Filtermiddle>
    <Filtermin type="number" placeholder="Min Price"> 

    </Filtermin>
    <Filtermax  type="number" placeholder="Max Price"></Filtermax>

    </Filtermiddle>

</Filtersection>

                </Productfilter>

                <Products>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
                </Products>
            </Productionsection>

{/* {loading && <Pageloading />} */}
            <Bonus/>
        </div>
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
const ShopTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
margin: 16px 0;
`
const ShopTitletext = styled(H2)`

`

const Productionsection =styled.div`
min-height: 600px;
width:100%;
padding: 15px 25px;
margin: 40px 0;

display: grid;
grid-template-columns: 300px auto;
grid-auto-rows: minmax(100px,auto);
grid-gap: 50px;

@media only screen and (max-width: 850px){
    grid-template-columns: 1fr;

}
`
const Productfilter =styled.div`
height: 200px;
width:100%;
display: flex;
flex-direction: column;
`
const Products =styled.div` 

min-height: 600px;
width:100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-auto-rows: minmax(350px,auto);
grid-gap: 30px;

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);

}
`

const Filtertitle = styled.div`
margin: 8px 0;
height: 50px; 
width: 100%;
`
const Filterh2 = styled(H2)``
const Filtersection = styled.div``
const Filtertop = styled.div`
height: 50px; 
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Filterh3 = styled(H3)`
`
const Filterbutton = styled.button`
text-transform: uppercase;
outline: none;
border: none;
background: transparent;
cursor: pointer;
font-weight: 600;
color: ${themes.jane};
font-size: 17px;
padding: 4px 8px;
height: 40px;
border-radius: 5px;
transition: 0.3s ease-in;
:hover{
    background: ${themes.janeBright};
}
`
const Filtermiddle = styled.div`
width: 100%;
height: 60px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
padding: 10px 25px;
`

const Filtermin = styled.input`
height: 40px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`
const Filtermax = styled.input`

height: 40px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`


export default Shop
