import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import { themes } from '../styles/ColorStyles'
import {  H1,H2, P } from '../styles/TextStyles'
import Display from '../components/Display'
import Newsletter from '../components/Newsletter'
import { mainButton } from '../styles/Button'
import axios from 'axios'
import { addToCartUrl,productDetailURL, productList } from '../constants'
import Pageloading from '../components/Pageloading'
import Modal from '../components/Modal'
import { authAxios } from '../utils'
import { fetchCart } from '../store/actions/cart'
import { connect } from 'react-redux'
import { logout } from '../store/actions/auth'
import ModalLoading from '../components/ModalLoading'
import ProductModal from '../components/ProductModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = (props) => {

    const [pageLoading, setPageLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [modalProduct, setModalProduct] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [ modalLoading, setModalLoading] = useState(false)

    const {authenticated} =props;

useEffect(() => {
    async function fetchItems(){
        setPageLoading(true)
        try{
            const res = await axios.get(productList)
        setData(res.data)
        setPageLoading(false)
        }catch(error){
            setPageLoading(false)
        }
    }
    fetchItems()

 }, [])


 const handleAddToCart = (title, slug)=>{
  if(authenticated){
    setLoading(true)
    authAxios
    .post(addToCartUrl, {slug})
    .then(res => {
        console.log(res.data)
        //updatecart count
        props.fetchCart()
        toast.success(`${title} was added to cart`)
        setShowModal(true)
        setLoading(false)
    }).catch(err=>{
      setLoading(false)
      //setError(err)
    })
  }else{
      alert("Please login")
  }
 }



 const closeModal = e =>{
    setShowModal(false)
 }

const cardModal = slug =>{
setModalLoading(true)
axios
.get(productDetailURL(slug))
.then(res=>{

    setModalLoading(false)
    setModalProduct(true)
 
})
.catch(err=>{
    setModalLoading(false)
    setModalProduct(false)
})
 }
    
 const closePop =()=>{
    setModalProduct(false)
 }
 return (
        <div>
        <ToastContainer />

        <Slider> 
        <Janehero>
            <Herocontainer>
                <Herotext>Welcome To Jane's Fashion</Herotext>
                <Herebig>"GIVING THE BEST <span>AT THE BEST PRICE"</span></Herebig>
                <Herobutton to='/shop'>Shop Now</Herobutton>
            </Herocontainer>
        </Janehero>
      
        </Slider>

       <Display/>
      
{modalProduct && 
<ProductModal anime={modalProduct} closePop={closePop} /> }
       {modalLoading && <ModalLoading />}
       {showModal && 
       <Modal modalClose={closeModal}/> }  
{error&&<p>{error}</p>}
            <Product>
         
          
<Productcontainer>

    <ProductTitle><Titleh1>Our Fab <span>Products</span></Titleh1></ProductTitle>
    {pageLoading && <Pageloading/>}
    <Products className="products">

    {data && data.map(item=>{
       return (
        <ProductCard key={item.id} slug={`/product/${item.slug}`} desc={item.description} loading={loading} img={item.image} price={item.price} discount={item.discount_price} title={item.title} cardAdd={()=> handleAddToCart(item.title,item.slug)} cardSearch={() =>cardModal(item.slug)} />
       )
    })}
 

    </Products>
</Productcontainer>

            </Product>


            <Banner/>
       
            <Newsletter/>
      
        </div>
    )
}

const Slider = styled.div`
height: 600px;
width: 100%;
margin: 0 0 24px 0;
`

const Janehero= styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
background: url("https://res.cloudinary.com/jane-s-fashion/image/upload/v1606049649/IMG-20190914-WA0008_fqboty.jpg") no-repeat center center/cover;

position: relative;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
::after{
    position: absolute;
    content: "";
    background: ${themes.overlay};
    top: 0;
    left: 0;
    width: 100%;
height: 100%;
z-index: -1;
 
}
`
const Herocontainer= styled.div`
color: ${themes.white};
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
z-index: 1;
text-align: center;
`
const Herotext= styled(P)`
margin: 8px 0;
`
const Herebig= styled(H2)`
margin: 8px 0;
`
const Herobutton= styled(mainButton)`
margin: 24px 0;
`



const Product = styled.div`
width: 100%;
min-height:500px;
margin: 24px 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Productcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
max-width: 1000px;
margin: 0 auto;
width:100%;
height:100%;
padding: 10px 15px;

`
const ProductTitle = styled.div`
height: 80px;
width:100%;
display: flex;
align-items: center;
justify-content: center;
margin: 24px 0;
padding: 10px 25px;
span{
    color: ${themes.jane};
}

`
const Titleh1 = styled(H1)`
text-align: center;
`

const Products = styled.div`
height: 100%;
width: 100%;
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: repeat(3, minmax(10px, 1fr));
grid-gap: 24px;
grid-auto-rows: minmax(300px,auto);

@media only screen and (max-width:650px){
    grid-template-columns: repeat(1,1fr);

}

`
const mapStateToProps = state =>{
    return {
      authenticated: state.auth.token !== null,
      cart: state.cart.shoppingCart
    }
  }
  
  const mapDispatchToProps = dispatch =>{
      return{
        logout: ()  => dispatch(logout()),
        fetchCart: () => dispatch(fetchCart())
        
      };
  };
export default connect(mapStateToProps,mapDispatchToProps) (Home)
