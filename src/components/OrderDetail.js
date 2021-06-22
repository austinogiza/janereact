import React, {useEffect, useState} from 'react'
import AccountLayout from '../container/AccountLayout'

import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import { baseURL,getOrderDetailURL,getOrderItemDetailURL } from '../constants'
import {BsArrowLeft} from 'react-icons/bs'
import { themes } from '../styles/ColorStyles'
import { H2, medium,P,SmallCaption} from '../styles/TextStyles'
import { authAxios } from '../utils'
import { Link, useParams } from 'react-router-dom'

const OrderDetail = () => {

  const {id} = useParams()
  const [loading, setLoading] =useState(false)
  const [data, setData] =useState([])
  const [dataItem, setDataItem] =useState([])

  const fetchOrderDetails =()=>{
  setLoading(true)
  authAxios
  .get(getOrderDetailURL, {params: {id}})
  .then(res=>{
    setData(res.data)
    setLoading(false)
  })
  .catch(err=>{
    setLoading(false)
  })
}

const fetchOrderItemDetails =()=>{

  authAxios
  .get(getOrderItemDetailURL, {params: {id}})
  .then(res=>{
    setDataItem(res.data)

  })
  .catch(err=>{
   
  })
}




useEffect(()=>{
fetchOrderDetails()
fetchOrderItemDetails()
document.title = `Jane's Fashion Dashoard - Ordered Item ${data.id}`
  }, [])

  return (
  <AccountLayout>
  

  {loading? <PageSkeleton/>:
  <>

  <Savedheader><Savetext> <Link to='/account/order'><Backicon/></Link> Order Details</Savetext></Savedheader>

<SavedCover>


<Saveitem key={data.id}>

<Savedetails>
  <Itemname> Order No #{ data.ref_code}</Itemname>
  <Itemsmallname> Place on: {new Date(`${data.ordered_date}`).toLocaleDateString()}</Itemsmallname>
  <Itemsmallname> No Of Item(s): {dataItem.length}</Itemsmallname>
  <Itemsmallname> Total:  &#8358;{Number(parseFloat(`${data.get_order_final_total}`).toFixed(3)).toLocaleString()}</Itemsmallname>


</Savedetails>
<Savedetails>
<Itemprice>
ITEMS IN YOUR ORDER
</Itemprice>
{dataItem.map(item=>{

  return(
    <>
    <OrderItems key={item.id}>
    <ItemImage>
      <Image src={`${baseURL}${item.item_obj.image}`} />
    </ItemImage>
    <Itemdets>
    <Itemprice>
    <Itemname>{item.item_obj.title}</Itemname>
  <Itemsmallname> Date Order: {new Date(`${data.ordered_date}`).toLocaleDateString()}</Itemsmallname>
  <Itemsmallname>QTY: {item.quantity}</Itemsmallname>
  <Itemsmallname> Price:  &#8358;{Number(parseFloat(`${item.item_obj.price}`).toFixed(3)).toLocaleString()}
     <strike>&#8358;{Number(parseFloat(`${item.item_obj.discount_price}`).toFixed(3)).toLocaleString()}</strike>
  </Itemsmallname>
  </Itemprice>
    </Itemdets>
  </OrderItems>
    </>
  )
})}
 
</Savedetails>
</Saveitem>

</SavedCover>
  </>
  }

  </AccountLayout>
  )
}


const Savedheader = styled.div`
min-height: 40px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
`
const Savetext = styled(H2)`
a{
  color: ${themes.black};
}
`
const SavedCover = styled.div`
min-height: 40px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Saveitem = styled.div`
min-height: 130px;
width: 100%;
border-radius: 4px;
padding: 8px;
margin: 8px 0;
padding: 16px;
display: flex;
flex-direction: column;

`

const Savedetails = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Itemname = styled(medium)``
const Itemprice = styled(P)`
margin: 8px 0;
font-weight: 600;
`
const Itemsmallname = styled(SmallCaption)`
margin: 4px 0;
font-weight: 400;
color: ${themes.grey};

strike{
  font-weight: 700;
  margin:0 8px;
}
`
// const NoItem = styled.div`
// width: 100%;
// height:200px;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// `
// const Noitemh1 = styled(product)`

// `

const OrderItems = styled.div`
min-height: 130px;
width: 100%;
border-radius: 4px;
padding: 8px;
border: 0.4px solid ${themes.blackLight};
margin: 8px 0;
padding: 16px;
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 10px;
`
const ItemImage = styled.div`

height: 100%;
width: 100%;
padding: 2px;
`
const Image = styled.img`

height: 100%;
width: 100%;
`
const Itemdets = styled.div`

height: 100%;
width: 100%;
`
const Backicon = styled(BsArrowLeft)``


export default OrderDetail
