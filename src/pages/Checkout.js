import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addressListUrl, orderSummaryURL,addressCreateURL,defaultAddressListUrl,getShippingFeeURL,addShippingFeeURL, getDefaultShippingFeeURL, addDefaultShippingFeeURL,addressDefaultCreateURL } from '../constants'
import {fetchCart } from '../store/actions/cart'
import { submitButton, wideButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import { H2, medium, NewCaption, SmallCaption,P } from '../styles/TextStyles'
import { authAxios } from '../utils'
import Loading from '../components/Loading'
import PageSkeleton from '../components/PageSkeleton'
import Skeleton from '../components/Skeleton'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Redirect } from 'react-router-dom'

const Cart = (props) => {

  const initial ={
    phone:"",
    country: "",
    zip:"",
    defaultChecked: "",
    address: "",
    checked: ""

  }
    
    const { authenticated } = props;
    const [data, setData] = useState(null)
    const [form, setForm] = useState(initial)
    const [country, setCountry] = useState(null)
    const [state, setState] = useState(null)
    const [redirect,setRedirect] = useState(false)
 const [region]  = useState(null)
    const [shipState,setShipState ] = useState(null)
    const [addresses, setAddresses] = useState([])
    const [defaultAddresses, setDefaultAddresses] = useState([])
    const [pageLoading, setPageLoading] = useState(false)
    const [defaultChecked, setCheckedDefault]= useState(false)
    const [checked, setChecked]= useState(false)
    const [checkoutLoading, setCheckoutLoading] = useState(false)
    const [shippingFee, setShippingFee] = useState(null)
  const {

    phone,
  zip,
  address
  } =form


  const handleFetchCart = () =>{

    authAxios
    .get(orderSummaryURL)
    .then(res=>{
      setData(res.data)
      
     
   
    }).catch(err=>{
 

    })
  }


  const handleFetchCartDou = () =>{
    setPageLoading(true)
    authAxios
    .get(orderSummaryURL)
    .then(res=>{
      setPageLoading(false)
   
    }).catch(err=>{
      setPageLoading(false)
     
    })
  }

  const handleDefaultFetchAddress = () =>{
    authAxios.get(defaultAddressListUrl)
    .then(res=>{
      setDefaultAddresses(res.data)

    })
    .catch(err=>{

    })
  }



useEffect(() => {
  document.title = `Jane's Fashion - Checkout`
  handleFetchCartDou()
handleFetchCart()
handleFetchAddress()

handleDefaultFetchAddress()
props.fetchCart()
return ()=>{
  props.fetchCart()
}
}, [])




const handleFetchAddress = () =>{
      authAxios.get(addressListUrl)
      .then(res=>{
        setAddresses(res.data)

      })
      .catch(err=>{

      })
    }


    
  if(redirect){
    return <Redirect to='/payment'/>
  }

const setSelectRegion =region=>{
      handleShippingFee(region)
    
  
}

const handleShippingFee =region=>{


  setState(region)

  authAxios
  .get(getShippingFeeURL, {params: {region, country}})
  .then(res=>{

    setShippingFee(res.data.shipping_fee)
    setShipState(res.data.state)
    handleShippingFeeFinal(res.data.shipping_fee)


  })
  .catch(err=>{

  })

}

const handleDefaultShippingFeeFinal=shippingFee=>{
  authAxios
  .post(addDefaultShippingFeeURL, {shippingFee})
  .then(res=>{
    handleFetchCart()
  
  })
  .catch(err=>{
  
  })
  }

  const handleChecked=()=>{
    
  const defaultState = defaultAddresses[0].state;
  const defaultCountry = defaultAddresses[0].country;

  authAxios
  .get(getDefaultShippingFeeURL, {params: {defaultState, defaultCountry}})
  .then(res=>{
    setShippingFee(res.data.shipping_fee)
    setShipState(res.data.state)
    handleDefaultShippingFeeFinal(res.data.shipping_fee)

  })
  .catch(err=>{

  })


  }
const selectCountry = val =>{
  setCountry(val)
}

// const  = val=>{
//   setRegion(val)
//   handleShippingFee(region)
// }


const handleShippingFeeFinal=shippingFee=>{
authAxios
.post(addShippingFeeURL, {shippingFee})
.then(res=>{
  handleFetchCart()

})
.catch(err=>{

})
}


const onSubmit = e =>{
  e.preventDefault()

  setCheckoutLoading(true)
  authAxios
  .post(addressCreateURL, {phone,country,shipState,address, zip, defaultChecked})
  .then(res=>{
    setRedirect(true)
    setCheckoutLoading(false)
    
  })
  .catch(err=>{
    setCheckoutLoading(false)
    setRedirect(false)
  })
  
}


const handleAddDefault =()=>{
  setCheckoutLoading(true)
  const addDefaultAddress = true;
  authAxios
  .post(addressDefaultCreateURL,{addDefaultAddress})
  .then(res=>{
    setRedirect(true)
    setCheckoutLoading(false)
    
  })
  .catch(err=>{
    setCheckoutLoading(false)
    setRedirect(false)
  })
}
const onChange = e=>{
  const {name,value} =  e.target;
  setForm({...form, [name]: value })

}
  
    return (
      <Cartbody>
<Container>
<Title><Titleh1>CONTACT INFORMATION</Titleh1></Title>
{ !pageLoading && authenticated && <>
  <PageTitle><Pageh1>Checkout</Pageh1></PageTitle>
</>}

<Checkout>


{pageLoading ? <PageSkeleton/> : <>

{authenticated && 
<>
<CheckoutForm>

{addresses.length > 0 && <UseDefault>
  <AddText> <Usecheck type="checkbox" onClick={handleChecked} onChange={e=> setChecked(e.currentTarget.checked)} value={checked} name="checked" /> <UseText >Use Your Default Address</UseText></AddText>
</UseDefault>}

{checked ? <>
<Checksection>
<Checkedaddress>Your default address is:</Checkedaddress>

{defaultAddresses && <>
<Defaultrow>
<DefaultLabel>Address:</DefaultLabel> <DefaultAddressDetails>{defaultAddresses[0].address}</DefaultAddressDetails>
</Defaultrow>

<Defaultrow><DefaultLabel>Phone No:</DefaultLabel><DefaultAddressDetails>{defaultAddresses[0].phone}</DefaultAddressDetails></Defaultrow>
<Defaultrow><DefaultLabel>State:</DefaultLabel> <DefaultAddressDetails>{defaultAddresses[0].state}</DefaultAddressDetails></Defaultrow>
<Defaultrow><DefaultLabel>Country:</DefaultLabel> <DefaultAddressDetails>{defaultAddresses[0].country}</DefaultAddressDetails></Defaultrow>
<Defaultrow>{defaultAddresses[0].zip && 
<>
<DefaultLabel>Zip:</DefaultLabel> <DefaultAddressDetails>{defaultAddresses[0].zip }</DefaultAddressDetails>

</>
}
</Defaultrow>
</>}


<Checkbutton onClick={handleAddDefault}>{checkoutLoading ? <Loading/>: "Proceed"}</Checkbutton>
</Checksection>
</>: 

<>

<Form onSubmit={onSubmit}>
  <Checkouttworow>
   <Checkinputcover>
     <Label>
       <Formname>Phone Number</Formname>
       <CheckoutInput value={phone} name="phone" onChange={onChange} required type="text" placeholder="Phone Number" />
     </Label>
   </Checkinputcover>
   <Checkinputcover>
     <Label>
       <Formname>Zip/Portal Code (Optional)</Formname>
       <CheckoutInput  value={zip} name="zip" onChange={onChange}  type="text" placeholder="Zip Code" />
     </Label>
   </Checkinputcover>
  </Checkouttworow>
  <Checkouttworow>
   <Checkinputcover>
     <Label>
       <Formname>Country</Formname>

           <CheckCountryselect  value={country}
          onChange={(val) => selectCountry(val)}/>

     </Label>
   </Checkinputcover>

   <Checkinputcover>
   <Label>
       <Formname>State</Formname>
   <Checkselect blankOptionLabel="Select State"  country={country} name="region" value={region}
          onChange={(val) => setSelectRegion(val)} />
     </Label>
   </Checkinputcover>
  </Checkouttworow>
  <Checkoutrow>
  
     <Label>
       <Formname>Address</Formname>
       <CheckoutInput value={address} name="address" onChange={onChange}  type="text" placeholder="Address" />
     </Label>


  </Checkoutrow>
  <Checkoutrow>
<DefaultAddress>
<Defaulth3>
<DefaultInput type="checkbox" checked={defaultChecked} value={defaultChecked} name="defaultChecked" onChange={e=>setCheckedDefault(e.currentTarget.checked)}/> <AddressName>Set As Default Shipping Address</AddressName></Defaulth3>
</DefaultAddress>
  
<Checkbutton>{checkoutLoading ? <Loading/>: "Checkout"}</Checkbutton>


</Checkoutrow>
</Form>

</>}

</CheckoutForm>

</>}

</>}

  
{pageLoading ? <Skeleton/>:

  <>
{authenticated && data && <div>
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
   <Orderprice>&#8358; {Number(parseFloat(`${order_items.item_obj.price}`).toFixed(3)).toLocaleString()}</Orderprice>
   <Orderquantity>Qty: {order_items.quantity}</Orderquantity>
 </Cardtitle>
</Ordercard>
  )
})} 

 
</Totalorder>
<Ordertotal>
  <Subtotal><span>Subtotal</span> <p>&#8358;{Number(parseFloat(`${data.get_order_total}`).toFixed(3)).toLocaleString()} </p></Subtotal>
  <Subtotal><span>Delivery fee</span> <p>{shippingFee ? <> &#8358;{Number(parseFloat(`${shippingFee}`).toFixed(3)).toLocaleString()}</>: <>0</>}</p></Subtotal>
</Ordertotal>
<CartTotal><span>Total</span> <p>&#8358;{Number(parseFloat(`${data.get_order_final_total}`).toFixed(3)).toLocaleString()}</p></CartTotal>

</Total>

</div>
} 
</>}

</Checkout>
{!pageLoading && !authenticated && <>
  <Empty>
<Emptyh1>You are not logged in.</Emptyh1>
<EmptyButton to='/login'>Log In To Shop</EmptyButton>

</Empty>
</>}
</Container>
      </Cartbody>
    )
}


const Empty = styled.div`
width: 100%;
min-height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Emptyh1 = styled(H2)`
margin: 24px 0;
text-align: center;
`
const EmptyButton = styled(wideButton)`

`

const Cartbody = styled.div`
min-height: 600px;
width: 100%;

`

const Checksection = styled.div`
min-height: 300px;
width: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
`
const Checkedaddress = styled(H2)`
margin: 8px 0;
`
const DefaultAddressDetails = styled(SmallCaption)`
min-height: 10px;
width: 100%;
color:${themes.black};
margin: 0 0 0  16px;
display: flex;
justify-content: flex-start;
align-items: center;
`
const DefaultLabel = styled(P)`
min-height: 10px;
width: 100px;
`
const Defaultrow = styled.div`
min-height: 20px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 4px 0;
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
background: #fafafa;
/* box-shadow: ${themes.shadow}; */
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

const UseDefault = styled.div`

`
const Usecheck = styled.input`
width: 16px;
height: 16px;
margin: 8px 0;

`
const UseText = styled(medium)`
margin: 0 8px;
`

const AddText = styled.label`
width: 100%;
min-height: 40px;
display: flex;
flex-direction:row;
justify-content: center;
`

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

const Checkselect = styled(RegionDropdown)`
height: 52px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8.39697L12 16.397L20 8.39697" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-position: top 50% right 8px;
background-repeat: no-repeat;
background-size: 9%;
font-size: 14px;
border-radius: 5px;
line-height: 1.42857143;
color: #333333;

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

const CheckCountryselect = styled(CountryDropdown)`
height: 52px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8.39697L12 16.397L20 8.39697" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-position: top 50% right 8px;
background-repeat: no-repeat;
background-size: 9%;
font-size: 14px;
border-radius: 5px;
line-height: 1.42857143;
color: #333333;

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
