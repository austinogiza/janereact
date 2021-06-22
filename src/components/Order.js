import React, {useEffect, useState} from 'react'
import AccountLayout from '../container/AccountLayout'

import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import {orderedItemsURL } from '../constants'

import { themes } from '../styles/ColorStyles'
import { H2, medium, NewCaption,product} from '../styles/TextStyles'
import { authAxios } from '../utils'
import {mainButton, smallButton} from '../styles/Button'



const Order = () => {
  const [loading, setLoading] =useState(false)
  const [data, setData] =useState([])

  const fetchOrdered =()=>{
    setLoading(true)
    authAxios
    .get(orderedItemsURL)
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)

    })

  }

  useEffect(() => {
    document.title = `Jane's Fashion Dashoard - Ordered Items`
    fetchOrdered()
    
  }, [])

  return (
<AccountLayout>
{loading? <PageSkeleton/>:
  <>

  <Savedheader><Savetext>Orders ({data.length}) </Savetext></Savedheader>

<SavedCover>
{data.length> 0 ?

data.map(data=> <><Saveitem key={data.id}>

<Savedetails>
  <Itemname> Order No: #{ data.ref_code}</Itemname>
  <Itemprice>
  &#8358;{Number(parseFloat(`${data.get_order_final_total}`).toFixed(3)).toLocaleString()}
  </Itemprice>
  <Itemname> No Of Items: {data.order_items.length}</Itemname>
  <Itemname> Date Ordered: {new Date(`${data.ordered_date}`).toLocaleDateString()}</Itemname>
</Savedetails>
<Savedbuy>
  <BuyNow to={`/account/order/${data.id}`}>See Details</BuyNow>

</Savedbuy></Saveitem></>)

  
 :<>
 <NoItem>
   <Noitemh1>
     You currently have no order
   </Noitemh1>
   <Shop to='/shop'> Go To Shop</Shop>
 </NoItem></>}

</SavedCover>

  </>
  }
</AccountLayout>
  )
}

const Savedheader = styled.div`
min-height: 40px;
width: 100%;
`
const Savetext = styled(H2)`

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
border: 0.4px solid ${themes.blackLight};
margin: 8px 0;
padding: 16px;
display: grid;
grid-template-columns: 3fr 1fr;
grid-gap: 10px;

@media only screen and (max-width: 650px){
  grid-template-columns: 2fr 1fr;
}
`

const Savedetails = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Itemname = styled(medium)``
const Itemprice = styled(NewCaption)`
margin: 8px 0;
font-weight: 600;
`
const Savedbuy = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
align-items: center;
`
const BuyNow = styled(smallButton)``


const NoItem = styled.div`
width: 100%;
height:200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Noitemh1 = styled(product)`

`
const Shop = styled(mainButton)`
margin: 32px 0;
`

export default Order
