import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { addressListUrl, countriesListURL, orderSummaryURL } from '../constants'

import {fetchCart } from '../store/actions/cart'
import { wideButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import { H2, medium } from '../styles/TextStyles'
import { authAxios } from '../utils'


const Cart = (props) => {

    const [data, setData] = useState(null)
    const [countries, setCountries] = useState([])
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(false)
    const [shippingFee, setShippingFee] = useState("Calculating...")
  

    useEffect(() => {

const { authenticated} = props;
handleFetchCart()
handleFetchCountries()
handleFetchAddress()

if(!authenticated){
  return <Redirect to='/login' />
}
console.log(countries)


}, [])

    const handleFetchCart = () =>{
   
      authAxios
      .get(orderSummaryURL)
      .then(res=>{
        setData(res.data)
   
     
      }).catch(err=>{
      
     
      })
    }

    

const handleFetchCountries = () =>{
      
      authAxios
      .get(countriesListURL)
      .then(res=>{
        setCountries(handleFormatCountries(res.data))
      
  
      })
      .catch(err=>{

      })
    }

const handleFormatCountries = countries =>{
  const keys = Object.keys(countries);
  return keys.map(k=>{
        return{
  key: k,
  text: countries[k],
  value:k
}})
}


const handleFetchAddress = () =>{
    setLoading(true)
      authAxios.get(addressListUrl)
      .then(res=>{
        setAddresses(res.data)
        setLoading(false)
  
      })
      .catch(err=>{

      })
    }

    const handleCreateAddress = e =>{
e.preventDefault()

}


 



  
    return (
      <Cartbody>
<Container>
<Title><Titleh1>CONTACT INFORMATION</Titleh1></Title>
<PageTitle><Pageh1>Checkout</Pageh1></PageTitle>
<Checkout>
<CheckoutForm>

<DefaultAddress>
<Defaulttitle>
  <Defaulth3>Default Shipping Address</Defaulth3>
</Defaulttitle>
  <AddressName>

  </AddressName>
  <Addresstitle>

  </Addresstitle>
</DefaultAddress>

<UseDefault>
  <Usecheck /> <UseText>Use Default Address</UseText>
  <AddIcon /> <AddText>Add New Address</AddText>
</UseDefault>

<Form>
  <Checkoutrow>
    <CheckoutInput />
  </Checkoutrow>
  <Checkoutrow>
    <CheckoutInput />
  </Checkoutrow>
  <Checkoutrow>
    <CheckoutInput />
  </Checkoutrow>
  <Checkoutrow>
    <CheckoutInput />
  </Checkoutrow>
  <Checkoutrow>
    <CheckoutInput />
  </Checkoutrow>
</Form>

</CheckoutForm>
{data && <div>
<Total>
<TotalHead>
  <Totalh1>ORDER SUMMARY</Totalh1>
</TotalHead>

<Totalorder>

  
{data.order_items.map(order_items =>{
  return(
    <Ordercard key={order_items.id}>

 <Cardtitle>
   <Ordertitle>{order_items.item}</Ordertitle>
   <Orderprice>&#8358; {order_items.item_obj.price}</Orderprice>
   <Orderquantity>Qty: {order_items.quantity}</Orderquantity>
 </Cardtitle>
</Ordercard>
  )
})} 

 
</Totalorder>
<Ordertotal>
  <Subtotal><span>Subtotal</span> <p>&#8358;{data.total}</p></Subtotal>
  <Subtotal><span>Delivery fee</span> <p>&#8358; {shippingFee}</p></Subtotal>
</Ordertotal>
<CartTotal><span>Total</span> <p>&#8358;{data.get_order_total}</p></CartTotal>

</Total>
</div>

} 
</Checkout>

</Container>
      </Cartbody>
    )
}



const Cartbody = styled.div`
min-height: 600px;
width: 100%;
display: flex;

`

const Container = styled.div`
height: 100%;
width: 100%;
max-width: 1100px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;

`
const Checkout =styled.div`
display: grid;
height: 100%;
width: 100%;
grid-template-columns: auto 400px;
grid-gap: 40px;
@media only screen and (max-width: 650px){
  grid-template-columns: 1fr;
}
`
const PageTitle = styled.div`
height: 100px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Pageh1 = styled(medium)`
color: ${themes.grey};
text-transform: uppercase;
`
const Title =styled.div`
height: 50px;
width: 100%;
margin: 8px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Titleh1 =styled(H2)``
const CheckoutForm =styled.div`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 16px auto;
width: 100%;
min-height: 300px;
justify-content: flex-start;
align-items: flex-start;
`
const Total =styled.div`
height: 100%;
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
background: ${themes.white};
box-shadow: ${themes.shadow};
padding: 10px 15px;
`

const TotalHead = styled.div`
height: 40px;
width: 100%;
border-bottom: 1px solid ${themes.grey};
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
const Totalh1 = styled(medium)`
color: ${themes.grey};
`
const Totalorder = styled.div`
min-height: 50px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
const Ordercard = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: row;
border-radius: 4px;
padding: 10px;
margin: 8px 0 0 0;
`

const Cardtitle = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Ordertitle = styled.h3`
font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
@media only screen and (max-width: 650px){
  font-size: 14px;
}
`
const Orderprice = styled.p`
font-size: 13px;
    font-weight: 400;
    line-height: 1.25;
margin: 6px 0 0 0;
`
const Orderquantity = styled.p`
font-size: 13px;
    font-weight: 400;
    line-height: 1.25;
margin: 6px 0 0 0;
`
const Ordertotal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 8px 0;
`
const Subtotal = styled.div`
width: 100%;
height: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
margin: 8px 0;

span{
  font-size: 15px;
}
p{
  font-size: 14px;

}
`
const CartTotal = styled.div`
margin: 8px 0;
display: flex;
flex-direction: row;
width: 100%;
height: 20px;
font-size: 18px;
padding:10px 0;
justify-content: space-between;
border-top: 1px solid ${themes.grey};
p{
  font-weight:600;
}
`

const DefaultAddress = styled.div``
const Defaulttitle = styled.div``
const Defaulth3 = styled.div``
const AddressName = styled.div``
const Addresstitle = styled.div``
const UseDefault = styled.div``
const Usecheck = styled.div``
const UseText = styled.div``
const AddIcon = styled.div``
const AddText = styled.div``

const Form = styled.div`
min-height: 400px;
width: 100%;
padding: 10px 25px;
display: flex;
flex-direction:column;
`
const Checkoutrow = styled.div`
min-height: 50px;
width: 100%;
`
const CheckoutInput = styled(formInput)``

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
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
