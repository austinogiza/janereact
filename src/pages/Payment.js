import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { orderSummaryURL, paystackKeyURL,userEmailURL,paymentDoneURL} from '../constants'
import {fetchCart } from '../store/actions/cart'
import { PaystackButton } from 'react-paystack';
import { themes } from '../styles/ColorStyles'
import { H2, medium, } from '../styles/TextStyles'
import { authAxios } from '../utils'
import PageSkeleton from '../components/PageSkeleton'
import Skeleton from '../components/Skeleton'
import axios from 'axios'
import { wideButton } from '../styles/Button'

const Payment = (props) => {

    const { authenticated } = props;
    const [data, setData] = useState(null)
  const [key, setKey] =useState(null)
  const [amount, setAmount] =useState(null)
  const [userEmail, setUserEmail] =useState(null)
    const [pageLoading, setPageLoading] = useState(false)
    
    const [done, setDone] = useState(false)
   
  
    const handlePaymentkey=()=>{
      axios
      .get(paystackKeyURL)
      .then(res=>
        setKey(res.data))
  
        .catch(err=>{
    
        })
    }

    
    const handleFetchUser=()=>{
      authAxios
      .get(userEmailURL)
      .then(res=>

        setUserEmail(res.data)
    
        )
      
        .catch(err=>{
    
        })
    }


useEffect(() => {
  handleFetchCart()
  handleFetchUser()
  handlePaymentkey()
  return () => {
    props.fetchCart()
  }

}, [])


const config = {
  reference: (new Date()).getTime(),
  email: `${userEmail}`,
  amount: `${amount}`*100,
  publicKey: `${key}`,
};
if(done){
  return <Redirect to='/order-successful' />
}


    const handleFetchCart = () =>{
      setPageLoading(true)
      authAxios
      .get(orderSummaryURL)
      .then(res=>{
        setData(res.data)
        setAmount(res.data.get_order_final_total)
        setPageLoading(false)

     
      }).catch(err=>{
        setPageLoading(false)
     
      })
    }

    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
   
      const ref = reference.trxref

      authAxios
      .post(paymentDoneURL, {amount,ref})
      .then(res=>{
        setDone(true)
        props.fetchCart()
      })
      .catch(err=>{
        setDone(false)
      })
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Pay Now',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

  
    return (
      <Cartbody>
<Container>
<Title><Titleh1>PAYMENT</Titleh1></Title>
<PageTitle><Pageh1>All transactions are secure and encrypted.</Pageh1></PageTitle>
{authenticated? <>

  <Checkout>
{pageLoading ? <PageSkeleton/>:
<>
<CheckoutForm>

  
<PaystackButton className="paystackButton" {...componentProps} />

</CheckoutForm>
</>}
{pageLoading ? <Skeleton/>:
<>
{data && <div>
<Total>

<>
<TotalHead>
  <Totalh1>ORDER SUMMARY</Totalh1>
</TotalHead>

<Totalorder>

  
{data.order_items.map(order_items =>{
  return(
    <Ordercard key={order_items.id}>

 <Cardtitle>
   <Ordertitle>{order_items.item}</Ordertitle>
   <Orderprice>&#8358;{Number(parseFloat(`${order_items.item_obj.price}`).toFixed(3)).toLocaleString()}</Orderprice>
   <Orderquantity>Qty: {order_items.quantity}</Orderquantity>
 </Cardtitle>
</Ordercard>
  )
})} 

 
</Totalorder>
<Ordertotal>
  <Subtotal><span>Subtotal</span> <p>&#8358;{Number(parseFloat(`${data.get_order_total}`).toFixed(3)).toLocaleString()} </p></Subtotal>
  <Subtotal><span>Delivery fee</span> <p>&#8358; {Number(parseFloat(`${data.shipping_fee}`).toFixed(3)).toLocaleString()}</p></Subtotal>
</Ordertotal>
<CartTotal><span>Total</span> <p>&#8358;{Number(parseFloat(`${data.get_order_final_total}`).toFixed(3)).toLocaleString()}</p></CartTotal>
</>
</Total>
</div>

} </>}
</Checkout>

</>:

<>

<Empty>
<Emptyh1>You are not logged in.</Emptyh1>
<EmptyButton to='/login'>Log In To Shop</EmptyButton>

</Empty>


</>}

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
justify-content: center;
align-items:center;
`
const Total =styled.div`
height: 100%;
width: 100%;
max-width: 400px;
display: flex;
flex-direction: column;
background: #fafafa;
/* box-shadow: ${themes.shadow}; */
padding: 10px 15px 30px 15px;
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


export default connect(mapStateToProps,mapDispatchToProps)(Payment)
