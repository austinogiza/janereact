import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {GrClose} from 'react-icons/gr'
import { MdShoppingCart} from 'react-icons/md'
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'
import { authAxios } from '../utils'
import { blackLikeButton, wideButton, submitButton } from '../styles/Button'
import { HeaderLight, H3,Caption, Small} from '../styles/TextStyles'
import { addToCartUrl, addToWishlist } from '../constants'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { fetchCart } from '../store/actions/cart'
import Loading from '../components/Loading'
import 'react-toastify/dist/ReactToastify.css';

const ProductModal = (props) => {
  const mainImageRef = useRef(null)
  const smallImageRef = useRef(null)
  const [mainImage, setMainImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])
  const [wishListCheck, setWishListCheck] =useState(false)
  const changeImage = image=>{
    setMainImage(image)
  }


  const {closePop,authenticated, item} = props;
  const handleAddToCart =(title,slug)=>{
    if(authenticated){
 
      authAxios
      .post(addToCartUrl, {slug})
      .then(res => {
          console.log(res.data)
          //updatecart count
          props.fetchCart()
          toast.success(`${title} added to your cart`)
     
          props.fetchCart()
     
      }).catch(err=>{
     
        //setError(err)
      })
    }else{
        alert("Please login")
    }
  }
  const addToWishList=(title,slug)=>{
    if(authenticated){

      authAxios
      .post(addToWishlist, {slug})
      .then(res => {
          console.log(res.data)
          //updatecart count
          toast.success(`${title} added to your wishlist`)
          setWishListCheck(true)
          props.fetchCart()
  
      }).catch(err=>{
        toast.error(`${title} was removed from your wishlist`)
        setWishListCheck(false)
      })
    }else{
        alert("Please login")
    }
  }
  console.log(item)

useEffect(()=>{


},[])

  return (
   
    <Background>
    
  
      <Container>
      <Closecover onClick={closePop}>  <Closeicon/></Closecover>
    
      {/* <Top>      

<ProductImage>

<MainImage>
<Main ref={mainImageRef} src={mainImage ? mainImage : product.image}/>
</MainImage>
<SmallImage>
{product.image && <Smallcol onClick={()=> changeImage(product.image)}><Smallimg ref={smallImageRef} src={product.image}/></Smallcol>}
{product.image_1 && <Smallcol onClick={()=> changeImage(product.image_1)}><Smallimg ref={smallImageRef} src={product.image_1}/></Smallcol>}
  {product.image_2 && <Smallcol onClick={()=> changeImage(product.image_2)}> <Smallimg ref={smallImageRef} src={product.image_2}/></Smallcol>}
 {product.image_3 &&  <Smallcol onClick={()=> changeImage(product.image_3)}> <Smallimg ref={smallImageRef} src={product.image_3}/></Smallcol>}
 {product.image_4 &&  <Smallcol onClick={()=> changeImage(product.image_4)}> <Smallimg ref={smallImageRef} src={product.image_4}/></Smallcol>}
</SmallImage>
      </ProductImage>
      <ProductDetails>
     
      <Title> <Category>Category:</Category><Cat>{product.category}</Cat></Title>
<Title><Titleh1>{product.title}</Titleh1></Title>
<Title><Price>&#8358; {Number(parseFloat(`${product.price}`).toFixed(3)).toLocaleString()}</Price>
 
 </Title>

 {product.discount_price && <PriceDiscount> <Discount><strike>&#8358; {Number(parseFloat(`${product.discount_price}`).toFixed(3)).toLocaleString()}</strike></Discount><Percent>  -{product.percentage}%</Percent> </PriceDiscount>}
<ProductColor>
  <ColorName>Color: {product.color}</ColorName>
  <ColorType> 
  {product.color === 'red' && <SwatchRed/> } 
 {product.color === 'black' && <SwatchBlack/>}
 {product.color === 'white' && <SwatchWhite/>}
 {product.color === 'purple' && <SwatchPurple/>}
 {product.color === 'green' && <SwatchGreen/>}
 {product.color === 'brown' && <SwatchBrown/>}
 {product.color === 'pink' && <SwatchPink/>}
  </ColorType>
</ProductColor>
<Purchase>
  <AddToCart onClick={()=>handleAddToCart(product.title,product.slug)}>
{loading ? <Loading/> : <Add>Add To Cart <CartIcon/></Add>}
  </AddToCart>
  <Like onClick={()=>addToWishList(product.title,product.slug)}>
  {wishListCheck? <LikedIcon />:<Icon />}


  </Like>
</Purchase>
      </ProductDetails>
      
      </Top> */}
      </Container>
    </Background>

  )
}

const Background = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 50%;
left: 50%;
z-index: 100;
transform: translate(-50%,-50%);
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 15px;
transition: 0.3s all ease-in;
background: rgba(0,0,0,0.75);

`

const Container = styled.div`
position: relative;
max-width: 680px;
margin: 0 auto;
width: 100%;
height: 100%;
max-height: 570px;
background: ${themes.white};
transition: 0.3s all ease-in;
padding: 10px 25px;
z-index: 120;
`

const Closecover = styled.div`
position: absolute;
top: 8px;
right: 8px;
height:32px;
width: 32px;
cursor: pointer;
background: ${themes.jane};
color: ${themes.white};
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 50%;
transition: all 0.3s ease-in;
:hover{
  box-shadow: ${themes.shadow};

}
`
const Closeicon = styled(GrClose)`
height:16px;
width: 16px;
color: ${themes.white};
`
const Top = styled.div`
width: 100%;
height: 100%;
display: grid;
margin-top: 40px;
grid-template-columns: repeat(2, minmax(10px, 1fr));
grid-gap: 40px;
grid-auto-rows: minmax(200px,auto);

@media only screen and (max-width: 700px){
  grid-template-columns: repeat(1, minmax(10px, 1fr));
} 
`
const ProductImage = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const MainImage = styled.div`
height: 300px;
width: 100%;
`
const Main = styled.img`
width: 100%;
height: 100%;
`
const SmallImage = styled.div`
width: 100%;
height: 80px;
display: grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 10px;
margin: 8px 0;
`
const Smallimg = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
`
const Smallcol = styled.div`
width: 100%;
height: 100%;
`
const ProductDetails = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Title = styled.div`
width: 100%;
min-height: 30px;
margin: 8px 0;
display: flex;
flex-direction: row;
align-items: center;
`
const Titleh1 = styled(HeaderLight)`
color: ${themes.grey};
`
const Price = styled(H3)``

const Category = styled(Small)`

`

const Cat = styled(Caption)`
margin: 0 4px;
text-transform: uppercase;
`

const PriceDiscount = styled.div`
width: 100%;
min-height: 30px;
display: flex;
flex-direction: row;
margin: 8px 0;
/* justify-content: center; */
align-items: center;
`
const Discount = styled(Small)`
color: ${themes.grey};
margin: 0 4px 0 0;
`
const Percent = styled.div`
width: 44px;
height: 32px;
margin: 0 4px 0 0;

display: flex;
color: ${themes.jane};
justify-content: center;
align-items: center;
background: ${themes.janeBright};
font-size: 15px;
font-weight: 400;
font-family: "Inter", sans-serif;
line-height: 20px;
@media only screen and (max-width: 650px){
    font-size: 12px;
    line-height: 18px;
}
border-radius: 4px;
`
const ProductColor = styled.div`
width: 100%;
min-height: 30px;
display: flex;
flex-direction: column;
margin: 8px 0;
`
const ColorName = styled(Small)`
width: 100%;
text-transform: capitalize;
`
const ColorType = styled.div`
width: 100%;
min-height: 30px;
`
const SwatchRed = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.swatchRed};
border: 1px solid ${themes.black};
cursor: pointer;
`
const SwatchBlack = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.black};
border: 1px solid ${themes.jane};
cursor: pointer;

`
const SwatchWhite = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.white};
border: 1px solid ${themes.black};
cursor: pointer;
`
const SwatchPurple = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.swatchPurple};
border: 1px solid ${themes.black};
cursor: pointer;
`
const SwatchGreen = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.swatchGreen};
border: 1px solid ${themes.black};
cursor: pointer;
`
const SwatchBrown = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.swatchBrown};
border: 1px solid ${themes.black};
cursor: pointer;
`
const SwatchPink = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background: ${themes.swatchPink};
border: 1px solid ${themes.black};
cursor: pointer;
`

const Purchase = styled.div`
width: 100%;
min-height: 50px;
margin: 40px 0 0 0;
display: flex;
flex-direction: row;
align-items: center;
`
const AddToCart = styled(submitButton)`

`
const CartIcon = styled(MdShoppingCart)`
width: 24px;
height: 24px;
margin: 0 0 0 8px;
`
const Like = styled(blackLikeButton)`
margin: 0 0 0 8px;
`
const Icon = styled(HiOutlineHeart)`
width: 30px;
height: 30px;
`
const LikedIcon = styled(HiHeart)`
width: 30px;
height: 30px;
`
const Add = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const mapStateToProps = state =>{
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchCart: () => dispatch(fetchCart())
    
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductModal)
