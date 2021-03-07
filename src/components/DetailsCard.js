import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { productButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { SmallCaption, H2 } from '../styles/TextStyles'
import {MdShoppingCart} from 'react-icons/md'



const DetailsCard = ({img,title, price,desc, cardAdd,slug}) => {

  const textRef = useRef()


    return (
            <Productwrapper className="productwrapper">
             <BodyLink to={slug}><Productbody>
            <Productimage src={img} />
<Productwrap>
<Producttitle>{title}</Producttitle>
<Productdesc><div ref={textRef}  dangerouslySetInnerHTML={{__html: desc}} /></Productdesc>
         <Productclick>
        <Productpricecover>
        <Productprice><MainPrice>&#8358;{Number(parseFloat(`${price}`).toFixed(3)).toLocaleString()} </MainPrice>
   </Productprice>
        </Productpricecover>
         {/* <Productadd>
         <Productaddbutton onClick={cardAdd}>
         <Productaddicon />
         </Productaddbutton>
         
            </Productadd> */}
         </Productclick>

</Productwrap>
      </Productbody>
      </BodyLink>
       </Productwrapper>
     
    )
}

const Productwrapper = styled.div`
height: 500px;
width: 100%;
max-width: 350px;
margin: 16px auto;
border-radius: 5px;
box-shadow: 0 2 24px rgba(0,0,0,0.05);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: ${themes.white};
transition: 0.4s ease-in;


a{
    color: ${themes.black}
}

@media only screen and (max-width: 650px){
    height: 450px;
}
`
const BodyLink = styled(Link)`
width: 100%;
height: 100%;
`
const Productbody = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
position: relative;
border-radius: 10px;
text-align: center;
color: ${themes.white};
z-index: 2;
/* padding: 0 0 20px 0; */
::after{
content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
  width: 100%;
  border-radius: 10px;
  background: rgba(2,3,4,0.4);

}
`

const Productwrap = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
position: relative;
z-index: 3;
margin: 24px 32px;
padding:5px;
`
const Productimage = styled.img`
border-radius: 10px;
object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
z-index: 1;
`
const Producttitle = styled(H2)`
margin: 0;
min-height: 48px;
position: relative;
z-index: 3;

`

const Productdesc = styled(SmallCaption)`
margin: 16px 0;
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
color: ${themes.white};
margin: 4px 0;
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

margin: 16px 0 0 0;
position: relative;
z-index: 3;
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
const Productaddbutton = styled(productButton)`
position: relative;
z-index: 20;
cursor: pointer;
`

const Productaddicon = styled(MdShoppingCart)`

width: 24px;
height: 24px;
color: ${themes.jane};

`



export default DetailsCard
