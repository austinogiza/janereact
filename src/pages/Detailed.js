import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { addToCartUrl, productDetailURL,addToWishlist, checkWishlistURL, reviewsURL,checkReviewsURL } from '../constants'
import styled from 'styled-components'
import { HeaderLight, H3,Caption, Small} from '../styles/TextStyles'
import { themes } from '../styles/ColorStyles'
import { MdShoppingCart} from 'react-icons/md'
import {HiOutlineHeart, HiHeart} from 'react-icons/hi'
import Loading from '../components/Loading'
import { blackLikeButton, wideButton, submitButton } from '../styles/Button'
import { authAxios } from '../utils'
import { connect } from 'react-redux'
import { fetchCart } from '../store/actions/cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from '../components/ProductCard'
import ReviewImage from '../images/review.svg'
import { MainTextarea } from '../styles/InputStyles'
import {FaStar} from 'react-icons/fa'

const Detailed = (props) => {

  const initial ={
    comment: ""
  }
  const [product, setProduct] = useState([])
  const {slug} = useParams()
  const [loading, setLoading] = useState(false)
  const [hover, setHover] = useState(null)
const [rating, setRating] = useState(null)
const[getReviews, setGetReviews] = useState([])
  const [writeReview, setWriteReview] = useState(false)
  const [wishListCheck, setWishListCheck] =useState(false)
  const [form, setForm] = useState(initial)
  const [reviewLoading, setReviewLoading] = useState(false)
  const [mainImage, setMainImage] = useState(null)
  const mainImageRef = useRef(null)
  const smallImageRef = useRef(null)
  const {
    comment
  } =form;

const onChange = e =>{
  const {name, value} = e.target;
  setForm({...form,[name]:value})
}

  const checkWishList =()=>{
    authAxios
    .get((checkWishlistURL),   {params: {slug}})
  
    .then(res=>{
      setWishListCheck(true)
    })
    .catch(err=>{
      setWishListCheck(false)
    })
  }
const {authenticated} = props;

  const fetchProduct = ()=>{
    axios
    .get(productDetailURL(slug))
    .then(res=>{
      setProduct(res.data)
    })
    .catch(err=>{

    })
  }

  const onSubmit = e =>{
    e.preventDefault();
    setReviewLoading(true)
    authAxios
    .post(reviewsURL, {rating,comment, slug})
    .then(res=>{
      setForm(initial)
      setRating(null)
      setReviewLoading(false)  
      setWriteReview(false)
      toast.success(res.data.message)
      checkReviews()
    })
    .catch(err=>{
      setReviewLoading(false)
    })
  }

  const checkReviews=()=>{
    axios
    .get(checkReviewsURL, {params: {slug}})
    .then(res=>{
      setGetReviews(res.data)
 
    })
    .catch(err=>{

    })
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
          fetchCart()
     
      }).catch(err=>{
        toast.error(`${title} was removed from your wishlist`)
        setWishListCheck(false)
      })
    }else{
        alert("Please login")
    }
  }

  const handleAddToCart =(title,slug)=>{
    if(authenticated){
      setLoading(true)
      authAxios
      .post(addToCartUrl, {slug})
      .then(res => {
          console.log(res.data)
          //updatecart count
          props.fetchCart()
          toast.success(`${title} added to your cart`)
     
          fetchCart()
          setLoading(false)
      }).catch(err=>{
        setLoading(false)
        //setError(err)
      })
    }else{
        alert("Please login")
    }
  }

  useEffect(() => {
  fetchProduct()
  checkWishList()
  checkReviews()

}, [])

const changeImage = image=>{
  setMainImage(image)
}
  
  return (

  <Product>

  <ToastContainer/>
    <Container>
<Top>      
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
      
      </Top>
      <DetailsProduct>
  <Header><Headerh3>Product Details:</Headerh3></Header>
<Details>

<div dangerouslySetInnerHTML={{__html: product.description}} />
</Details>
<SizeChart>
  Size:  <Chart>See Size Chart</Chart>
</SizeChart>
</DetailsProduct>
    </Container>
    <Cute>
<Container>
<Cuteheader>RECOMMENDED FOR YOU</Cuteheader>
<Cuteproducts>
  <ProductCard/>
</Cuteproducts></Container>
</Cute>
<Reviews>
 <Container>
 <ReviewsHeader>
    <Reviewsh3>Reviews</Reviewsh3>
    </ReviewsHeader>
{getReviews.length >= 1 ? <ReviewSection>
      
      
      {getReviews.map(review=>{
        return (
          <Reviewcover key={review.id}>
        <Name>{review.user_details.first_name} <Buyer>VERIFIED BUYER</Buyer></Name>
        <Time>{new Date(`${review.time}`).toLocaleDateString()}</Time>
        <Rating>

        {review.rating === 1 && <><StarIcon color="#ffc107"/></>}
        {review.rating === 2 && <><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/></>}
        {review.rating === 3 && <><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/></>}
        {review.rating === 4 && <><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/></>}
        {review.rating === 5 && <><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/><StarIcon color="#ffc107"/></>}
        </Rating>
        <Comment>{review.review}</Comment>
      </Reviewcover>
        )
      })}
      
    </ReviewSection>: <NoReview>
      <NoImage src={ReviewImage} alt="Jane's Fashion" />
      <Notext>This product has no review yet.</Notext>
    </NoReview> }
    

    <ReviewAdd>
{authenticated ?
<>
{writeReview?
<ReviewForm onSubmit={onSubmit}>
<StarRating>
{[...Array(5)].map((star, i)=>{
const ratingValue = i + 1;
return(
  <StarLabel key={star}>
    <StarInput required="required"  value={ratingValue} onClick={()=>setRating(ratingValue)} type="radio" name="rating" />
<StarIcon color={ratingValue <= (hover || rating) ? "#ffc107": "#e4e5e9"} onMouseEnter={()=>setHover(ratingValue)} onMouseLeave={()=> setHover(null)}/>
  </StarLabel>
)
})}
 
</StarRating>
<ReviewTextArea placeholder="Add Review"  name="comment" value={comment} onChange={onChange} required/>
<ReviewSubmit type="submit" >{reviewLoading ? <Loading/>: "Submit Review"}</ReviewSubmit>
</ReviewForm>: <><AddButton onClick={()=> setWriteReview(true)}>Write A Review</AddButton></>} </>: 
 <> <LoginButton to='/login'>Log In To Leave Review</LoginButton></>
}

    </ReviewAdd>
 </Container>
</Reviews>

  </Product>
  )
}

const Product = styled.div`
width: 100%;
min-height: 700px;
`
const Container = styled.div`
width: 100%;
height: 100%;
max-width: 1100px;
margin: 0 auto;
padding: 0 15px;
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

const DetailsProduct = styled.div`
width: 100%;
min-height: 100px;
margin: 40px 0;
`
const Header = styled.div`
width: 100%;
margin: 16px 0;
`
const Headerh3 = styled(Small)`
font-weight: 600;
`

const SizeChart = styled.div`
width: 100%;
min-height: 30px;
display: flex;
flex-direction: row;
margin: 24px 0;
align-items: center;
justify-content: space-between;
font-size: 17px;
font-weight: 400;
line-height: 25px;
font-family: "Inter", sans-serif;
@media only screen and (max-width:550px){
    font-size: 16px;
    line-height: 24px;
}
`
const Chart = styled.div`
cursor: pointer;
font-size: 14px;
color: ${themes.black};
text-decoration: underline;
font-weight: 600;
line-height: 25px;
font-family: "Inter", sans-serif;
@media only screen and (max-width:550px){
    font-size: 13px;
    line-height: 24px;
}
`

const Details = styled.div`
width: 100%;
min-height: 100px;
`

const Cute = styled.div`
width: 100%;
min-height: 500px;
background: ${themes.smokeWhite};

`
const Cuteheader = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
min-height: 60px;
font-size: 32px;
margin: 16px 0; 
padding: 16px 0;
font-weight: 600;
line-height: 34px;
font-family: "Inter", sans-serif;
@media only screen and (max-width: 650px){
    font-size: 24px;
    line-height: 28px;
}
`
const Cuteproducts = styled.div`
width: 100%;
min-height: 400px;
display: grid;
grid-template-columns: repeat(3,1fr);
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
}
`

const Reviews = styled.div`
width: 100%;
min-height: 300px;
`
const ReviewsHeader = styled.div`
width: 100%;
min-height: 50px;
margin-top: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Reviewsh3 = styled(HeaderLight)`
font-weight: 600;
`

const ReviewAdd = styled.div`
width: 100%;
min-height: 50px;
margin: 32px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const AddButton = styled(submitButton)``
const ReviewForm = styled.form`
width: 100%;
min-height: 20px;
`

const ReviewTextArea = styled(MainTextarea)``
const ReviewSubmit = styled(submitButton)`
margin: 8px 0;
`
const ReviewSection = styled.div`
width: 100%;
min-height: 20px;
display: grid;
margin: 40px 0;
grid-template-columns: repeat(2, minmax(10px, 1fr));
grid-gap: 10px;
grid-auto-rows: minmax(150px,auto);

@media only screen and (max-width: 700px){
  grid-template-columns: repeat(1, minmax(10px, 1fr));
} 
`
const Buyer = styled.div`
font-size: 13px;
font-weight: 400;
color: ${themes.grey};
font-family: "Inter", sans-serif;
line-height: 20px;
@media only screen and (max-width: 650px){
    font-size: 12px;
    line-height: 18px;
}
`
const Reviewcover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Name = styled(Small)`
font-weight: 600;
margin: 4px 0;
text-transform: capitalize;
`
const Time = styled(Caption)`
margin: 4px 0;
`
const Rating = styled.div``
const Comment = styled(Small)`
margin: 4px 0;
text-transform: capitalize;
`

const NoReview  = styled.div`
width: 100%;
min-height: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 32px 0;
`
const NoImage  = styled.img`
width: 60px;
height: 60px;
margin: 16px 0;
`
const Notext  = styled(Small)`

`
const LoginButton = styled(wideButton)`
margin: 24px 0;
`

const StarRating = styled.div`
margin: 16px 0;
`
const StarLabel = styled.label``
const StarInput = styled.input`
display: none;
`
const StarIcon = styled(FaStar)`
width:24px;
height: 24px;
cursor: pointer;
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
export default connect(mapStateToProps,mapDispatchToProps)(Detailed) 
