import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import {addressListUrl, deleteAddressUrl} from '../constants'
import AccountLayout from '../container/AccountLayout'
import { themes } from '../styles/ColorStyles'
import { H2, medium,product,SmallCaption} from '../styles/TextStyles'
import { authAxios } from '../utils'
import {mainButton} from '../styles/Button'
// import {BiPencil} from 'react-icons/bi'
// import { Link } from 'react-router-dom'

const Address = () => {
  const [loading, setLoading] =useState(false)
  const [data, setData] =useState([])

  const fetchAddress = ()=>{
    setLoading(true)
    authAxios
    .get(addressListUrl)
    .then(res=>{
      setData(res.data)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
    })
  }


  useEffect(() => {
    fetchAddress()
    
    document.title = `Jane's Fashion Dashoard - Address`
  }, [])

  const handleAddressDelete = id=>{
    authAxios
    .post(deleteAddressUrl, {id})
    .then(res=>{
      setData(res.data)
      fetchAddress()
    })
    .catch(err=>{
      setLoading(false)
    })
  }
  return (
  <AccountLayout>
{loading ? <PageSkeleton/>:
  <>

  <Savedheader><Savetext>Address ({data.length})</Savetext></Savedheader>

<SavedCover>
{data.length> 0 ?

data.map(data=> <><Saveitem key={data.id}>

<Savedetails>
<Addressname>Address</Addressname>
  <Itemname>{data.user_details.first_name} {data.user_details.last_name} </Itemname>
  <Itemname>{data.country} </Itemname>
  <Itemname>{data.address}, {data.state}</Itemname>
  <Itemname>{data.phone} </Itemname>

</Savedetails>
<Savedbuy>
  {/* <BuyNow to={`/account/address/edit/${data.id}`}> <Removeicon/> Edit</BuyNow> */}
  <Remove onClick={()=>handleAddressDelete(data.id)}>
    Delete
  </Remove>
</Savedbuy></Saveitem></>)

  
 :<><NoItem>
   <Noitemh1>
     You currently have no address
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
padding: 16px;
border: 0.4px solid ${themes.blackLight};
margin: 8px 0;
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
const Itemname = styled(SmallCaption)`
font-weight: 500;
margin: 4px 0;
color: ${themes.grey};
`
const Addressname = styled(medium)`
margin: 8px 0;
font-weight: 600;
`

const Savedbuy = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 10px;
align-items: flex-start;
`
// const BuyNow = styled(Link)`
// margin: 4px;
// transition: 0.3s all ease-in;
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 14px;
// font-weight: 400;
// color: ${themes.black};
// :hover{
//   color: ${themes.blackLight};
//   text-decoration: underline;
// }
// `

const Remove = styled.div`
cursor: pointer;
margin: 4px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 400;
color: ${themes.red};
line-height: 18px;
font-family: "Mulish", sans-serif;
transition: 0.3s all ease-in;
:hover{
  color: ${themes.jane};
  text-decoration: underline;
}
@media only screen and (max-width:550px){
    font-size: 13px;
    line-height: 16px;
}
`

// const Removeicon = styled(BiPencil)`
// margin:  0 4px; 
// height: 14px;
// width: 14px;
// color: ${themes.black};
// transition: 0.3s all ease-in;
// ${BuyNow}:hover &{
//   color: ${themes.blackLight};
//   text-decoration: underline;
// }
// `

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
export default Address
