import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { addressListUrl, countriesListURL, orderSummaryURL } from '../constants'
import {fetchCart } from '../store/actions/cart'
import { submitButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput,formSelect } from '../styles/InputStyles'
import { H2, medium, NewCaption, SmallCaption } from '../styles/TextStyles'
import { authAxios } from '../utils'
import Loading from '../components/Loading'

const Cart = (props) => {

  const initial ={
    phone:"",
    country: "",
    state:"",
    zip:"",
  }
    
    const { authenticated } = props;
    const [data, setData] = useState(null)
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(null)
    const [countrySelected, setCountrySelected] = useState(false)
    const [form, setForm] = useState(initial)
    const [formatCountries, setFormatCountries] = useState([])
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(false)
    const [checkoutLoading, setCheckoutLoading] = useState(false)
    const [shippingFee, setShippingFee] = useState("Calculating...")
  const {
    state,
    phone,
  zip
  } =form

    useEffect(() => {


handleFetchCart()
handleFetchCountries()
handleFetchAddress()

if(!authenticated){
  return <Redirect to='/login' />
}


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
 setFormatCountries(Object.values(countries))
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


const handleFetchState = e =>{
  setCountry(e.target.value)
  console.log(country)
if(country  === "Nigeria"){
   setCountrySelected(true)
}
else{
  setCountrySelected(false)
}

}

const onSubmit = e =>{
  e.preventDefault()
  setCheckoutLoading(true)
  authAxios
  .post()
  .then(res=>{
    setCheckoutLoading(false)
  })
  .catch(err=>{
    setCheckoutLoading(false)
  })
  
}
console.log(country)
const onChange = e=>{
  const {name,value} =  e.target;
  setForm({...form, [name]: value })


}
  
    return (
      <Cartbody>
<Container>
<Title><Titleh1>CONTACT INFORMATION</Titleh1></Title>
<PageTitle><Pageh1>Checkout</Pageh1></PageTitle>
<Checkout>
<CheckoutForm>

{addresses.length > 0 && <UseDefault>
  <Usecheck /> <UseText>Use Default Address</UseText>
  <AddIcon /> <AddText>Add New Address</AddText>
</UseDefault>}


<Form onSubmit={onSubmit}>
  <Checkouttworow>
   <Checkinputcover>
     <Label>
       <Formname>Phone Number</Formname>
       <CheckoutInput required type="text" placeholder="Phone Number" />
     </Label>
   </Checkinputcover>
   <Checkinputcover>
     <Label>
       <Formname>Zip/Portal Code</Formname>
       <CheckoutInput type="text" placeholder="Zip Code" />
     </Label>
   </Checkinputcover>
  </Checkouttworow>
  <Checkouttworow>
   <Checkinputcover>
     <Label>
       <Formname>Country</Formname>
       <Checkselect name="country" value={country} onChange={handleFetchState}>
  {formatCountries.map(country => {
    return( 
      <Checkoption key={country} value={country}>{country}</Checkoption>)
  })}
     
        
      </Checkselect>
     </Label>
   </Checkinputcover>

   <Checkinputcover>
   {countrySelected?   <Label>
       <Formname>State</Formname>
      <Checkselect>
        <Checkoption>Edo State</Checkoption>
      </Checkselect>
     </Label>:   <Label>
       <Formname>State</Formname>
       <CheckoutInput type="text" value={state} name="state" placeholder="State" />
     </Label>}
   
   </Checkinputcover>
  </Checkouttworow>
  <Checkoutrow>
  
     <Label>
       <Formname>Address</Formname>
       <CheckoutInput type="text" placeholder="Address" />
     </Label>


  </Checkoutrow>
  <Checkoutrow>
<DefaultAddress>
<Defaulth3>
<DefaultInput type="checkbox" /> <AddressName>Set As Default Shipping Address</AddressName></Defaulth3>
</DefaultAddress>
  
<Checkbutton>{checkoutLoading ? <Loading/>: "Checkout"}</Checkbutton>


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
  <Subtotal><span>Subtotal</span> <p>&#8358;{Number(parseFloat(`${data.total}`).toFixed(3)).toLocaleString()} </p></Subtotal>
  <Subtotal><span>Delivery fee</span> <p>&#8358; {shippingFee}</p></Subtotal>
</Ordertotal>
<CartTotal><span>Total</span> <p>&#8358;{Number(parseFloat(`${data.get_order_total}`).toFixed(3)).toLocaleString()}</p></CartTotal>

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
max-width: 600px;
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
margin: 0;
`

const Cardtitle = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 0;
`
const Ordertitle = styled.h3`
font-size: 16px;
    font-weight: 800;
    line-height: 1.25;
    margin: 0;
@media only screen and (max-width: 650px){
  font-size: 14px;
}
`
const Orderprice = styled.p`
font-size: 13px;
font-weight: 400;
line-height: 1.25;
margin: 8px 0 0 0;
`
const Orderquantity = styled.p`
font-size: 13px;
    font-weight: 400;
    line-height: 1.25;
margin: 8px 0 0 0;
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

const DefaultAddress = styled.div`
width: 100%;
min-height: 20px;

margin: 16px 0;
`
const DefaultInput = styled.input`
width: 16px;
height: 16px;
border-radius: 5px;
`
const Defaulth3 = styled.label`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 100%;
`
const AddressName = styled(NewCaption)`
margin: 0 0 0 8px;
`

const UseDefault = styled.div``
const Usecheck = styled.div``
const UseText = styled.div``
const AddIcon = styled.div``
const AddText = styled.div``

const Form = styled.form`
min-height: 400px;
width: 100%;
padding: 10px 20px;
display: flex;
flex-direction:column;
max-width: 700px;
margin: 16px 0;
`
const Checkoutrow = styled.div`
min-height: 50px;
width: 100%;
margin: 0;
`

const Checkbutton = styled(submitButton)`
margin: 8px 0;
`
const Checkouttworow  = styled.div`
margin: 8px 0;
min-height: 50px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 24px;

`
const Checkinputcover = styled.div``
const Label = styled.label``
const Formname = styled(SmallCaption)``

const Checkselect = styled(formSelect)`
`
const Checkoption = styled.option`
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
