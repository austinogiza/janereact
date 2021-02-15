import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { orderSummaryURL, orderItemDeleteURL, addToCartUrl, orderItemUpdateQuantityURL } from '../constants'
import { fetchCart } from '../store/actions/cart'
import { wideButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { H2,H3, medium } from '../styles/TextStyles'
import { authAxios } from '../utils'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {FaTrash } from 'react-icons/fa'
import Pageloading from '../components/Pageloading'

const Cart = (props) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

    const {authenticated, cart} = props;
  


    const handleFetchCart = () =>{
      setLoading(true)
      authAxios
      .get(orderSummaryURL)
      .then(res=>{
        setData(res.data)
        setLoading(false)
     
      }).catch(err=>{
        setLoading(false)
     
      })
    }
    
    const handleNewFetchCart = () =>{
  
      authAxios
      .get(orderSummaryURL)
      .then(res=>{
        setData(res.data)
 
     
      }).catch(err=>{
   
     
      })
    }
    
const handleRemoveItem = itemID =>{
    authAxios
    .delete(orderItemDeleteURL(itemID))
    .then(res=>{
      handleNewFetchCart()
    })
    .catch(res=>{

    })
}
    
 
useEffect(() => {
    handleFetchCart()
 

}, [])

const handleRemoveOneFromCart = slug =>{
    authAxios
    .post(orderItemUpdateQuantityURL, {slug})
    .then(res => {
      handleNewFetchCart()
    }).catch(err=>{
 
      //setError(err)
    })
}

const handleAddToCart = slug =>{
    authAxios
    .post(addToCartUrl,{slug})
    .then(res => {
  
      handleNewFetchCart()
    

    }).catch(err=>{
  
      //setError(err)
    })
   }

    return (
      <Cartbody>
<Container>
<Title><Titleh1>SHOPPING BAG</Titleh1></Title>
<Cartrang><Cartrangh3>Your Cart Lovely! ({cart !== null ? cart.order_items.length: 0 } {cart !== null && cart.order_items.length > 1 ? <span>items</span> :<span>item</span>})</Cartrangh3></Cartrang>
{data && 
<Section>
<Table>
<Thead>
<Tr>
<Th>Item</Th>
<Th>QUANTITY</Th>
<Th>Price</Th>

</Tr></Thead>
{loading && <Pageloading/>}
{data.order_items.map(order_items => {
    return(
        <Tbody key={order_items.id}><Tr>  
  <Td><Itemname>{order_items.item}</Itemname></Td>
    <Td><Quantity>
 <Quant>   
 <Quanminus onClick={() => handleRemoveOneFromCart(order_items.item_obj.slug)}/>
   <Quan>{order_items.quantity}</Quan>
   <Quanplus onClick={ () => handleAddToCart(order_items.item_obj.slug)} /></Quant>

    
<Remove onClick={() => handleRemoveItem(order_items.id)}> <Removeicon/> Remove</Remove>
    </Quantity></Td>
    <Td>&#8358;{order_items.item_obj.price}</Td></Tr>
</Tbody>
    )
}

)}
<Tempty>
<Tdata>{!data.total? <Empty>
<Emptyh1>Your shopping bag is empty.</Emptyh1>
<EmptyButton to='/shop'>CONTINUE SHOPPING</EmptyButton></Empty> : null}</Tdata>
</Tempty>
</Table>
{data.total ? <Checkout><Subtotal><Item><span>Subtotal</span></Item><Total>&#8358;{data.total}</Total></Subtotal>
<CheckoutBtn to='/checkout'>Checkout</CheckoutBtn></Checkout>: null}



</Section>}



{!authenticated && 
<Empty>
<Emptyh1>You are not logged in.</Emptyh1>
<EmptyButton to='/login'>Log In To Shop</EmptyButton>

</Empty>}

</Container>
      </Cartbody>
    )
}



const Cartbody = styled.div`
min-height: 600px;
width: 100%;
display: flex;

`
const Cartrang = styled.div`
height: 100px;
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: row;
`
const Cartrangh3 = styled(H3)``
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
const Title = styled.div`
height: 100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Table = styled.div`
min-height: 300px;
width: 100%;
padding: 10px 15px;
`
const Titleh1 = styled(H2)`
color: ${themes.black};`

const Section = styled.div`
min-height: 300px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

@media only screen and (max-width:650px){
    flex-direction: column;
}
`
const Checkout = styled.div`
max-width: 400px;
width: 100%;
min-height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${themes.offWhite};
padding: 10px 15px;
`

const CheckoutBtn = styled(wideButton)`
margin: 16px 0;
`
const Subtotal = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: space-between;
`
const Item = styled(medium)`
span{
    font-weight: 600;
}
`
const Total = styled(medium)`
  font-weight: 600;
`

const Empty = styled.div`
width: 100%;
min-height: 300px;
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

const Thead = styled.div`
width: 100%;
min-height: 50px;
border-bottom: 1px solid ${themes.grey};

`
const Tr = styled.div`
width: 100%;
min-height: 50px;
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 2fr 1fr 1fr;
`
const Th = styled.div`
padding: 15px;
text-align: left;
width: auto;
font-size: 18px;
font-weight: 700;
text-transform: uppercase;
color: ${themes.grey};
`

const Tbody = styled.div`
width: 100%;
min-height: 100px;
padding: 10px 0;
background:  ${themes.white};
border-radius: 4px;
margin: 8px 0;
box-shadow: ${themes.shadow};
`
const Td = styled.div`
font-size: 18px;
font-weight: 400;
width: auto;
padding: 10px;
text-align: left;

`

const Itemname = styled.h3`
font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
@media only screen and (max-width: 650px){
  font-size: 14px;
}
`
const Tdata = styled.div`
width: 100%;
min-height: 100px;
`
const Tempty = styled.div`
width: 100%;
min-height: 100px;
`
const Quantity = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Remove = styled.div`
font-size: 14px;
color: ${themes.red};
cursor: pointer;
font-weight: 700;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`
const Removeicon = styled(FaTrash)`
margin: 0 8px 0 0;

`
const Quant = styled.div`
width: 100px;
min-height: 50px;
display: flex;
`
const Quanminus= styled(AiOutlineMinus)`
cursor: pointer;
width: 24px;
height: 24px;

`
const Quan = styled.div`
width: 32px;
height: 32px;
margin: 0 10px;
border: 1px solid ${themes.black};
padding: 16px;

font-size: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Quanplus = styled(AiOutlinePlus)`
cursor: pointer;
width: 24px;
height: 24px;

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

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
