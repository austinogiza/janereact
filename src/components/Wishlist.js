import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import { fetchWishListURL,baseURL,deleteWishListURL } from '../constants'
import AccountLayout from '../container/AccountLayout'
import { themes } from '../styles/ColorStyles'
import { H2, medium, NewCaption,product} from '../styles/TextStyles'
import { authAxios } from '../utils'
import {mainButton, smallButton} from '../styles/Button'
import {MdDelete} from 'react-icons/md'
import { toast } from 'react-toastify'
const Wishlist = () => {
  const [loading, setLoading] =useState(false)
  const [data, setData] =useState([])
  const fetchSaved =()=>{
    setLoading(true)
    authAxios
    .get(fetchWishListURL)
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)

    })

  }
const handleDelete =slug=>{
  authAxios
  .post(deleteWishListURL, {slug})
  .then(res=>{
    fetchSaved()
    toast.success("Item successfully removed from your saved items")
  })
}
  useEffect(()=>{

    document.title = `Jane's Fashion Dashoard - Wishlist`
    fetchSaved()
  },[])
  return (
    <AccountLayout>
  {loading? <PageSkeleton/>:
  <>

  <Savedheader><Savetext>Saved Items ({data.length})</Savetext></Savedheader>

<SavedCover>
{data.length> 0 ?

data.map(data=> <><Saveitem key={data.id}>
<Saveimg>
  <Image src={`${baseURL}${data.item.image}`} alt={data.item.title}/>
</Saveimg>
<Savedetails>
  <Itemname> { data.item.title}</Itemname>
  <Itemprice>
  &#8358;{Number(parseFloat(`${data.item.price}`).toFixed(3)).toLocaleString()}
  </Itemprice>
</Savedetails>
<Savedbuy>
  <BuyNow to={`/product/${data.item.slug}`}>Buy Now</BuyNow>
  <Remove onClick={()=>handleDelete(data.item.slug)}>
    <Removeicon/> Remove
  </Remove>
</Savedbuy></Saveitem></>)

  
 :<><NoItem>
   <Noitemh1>
     You currently have no item saved
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
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-gap: 10px;

@media only screen and (max-width: 650px){
  grid-template-columns: 1fr 1fr 1fr;
}
`
const Saveimg = styled.div`
height: 100%;
width: 100%;
padding: 2px;
`
const Image = styled.img`

height: 100%;
width: 100%;
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

const Remove = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 18px;
font-weight: 400;
color: ${themes.jane};
line-height: 18px;
height: 32px;
width: 100%;
font-family: "Mulish", sans-serif;
transition: 0.4s ease-in;
border-radius: 3px;
:hover{
  background: ${themes.janeBright};
}
@media only screen and (max-width:550px){
    font-size: 16px;
    line-height: 16px;
}
`

const Removeicon = styled(MdDelete)`
margin:  0 4px; 
height: 18px;
width: 18px;
`

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
export default Wishlist
