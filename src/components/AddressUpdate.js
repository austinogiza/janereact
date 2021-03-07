import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import {addressListUrl, deleteAddressUrl} from '../constants'
import AccountLayout from '../container/AccountLayout'
import { themes } from '../styles/ColorStyles'
import { H2, medium,product,SmallCaption} from '../styles/TextStyles'
import { authAxios } from '../utils'
import {mainButton} from '../styles/Button'
import {BiPencil} from 'react-icons/bi'

const AddressUpdate = () => {
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
    
 
  }, [])

  // const handleAddressDelete = id=>{
  //   authAxios
  //   .post(deleteAddressUrl, {id})
  //   .then(res=>{
  //     setData(res.data)
  //     fetchAddress()
  //   })
  //   .catch(err=>{
  //     setLoading(false)
  //   })
  // }
  return (
  <AccountLayout>
{loading ? <PageSkeleton/>:
  <>

  <Savedheader><Savetext>Update Address </Savetext></Savedheader>

<SavedCover>
<Saveitem key={data.id}>

<Savedetails>

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
// const Itemname = styled(SmallCaption)`
// font-weight: 500;
// margin: 4px 0;
// color: ${themes.grey};
// `
// const Addressname = styled(medium)`
// margin: 8px 0;
// font-weight: 600;
// `

// const Savedbuy = styled.div`
// height: 100%;
// width: 100%;
// display: flex;
// flex-direction: row;
// justify-content: flex-end;
// padding: 10px;
// align-items: flex-start;
// `
// const BuyNow = styled.div`
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

// const Remove = styled.div`
// cursor: pointer;
// margin: 4px;
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 14px;
// font-weight: 400;
// color: ${themes.red};
// line-height: 18px;
// font-family: "Mulish", sans-serif;
// transition: 0.3s all ease-in;
// :hover{
//   color: ${themes.jane};
//   text-decoration: underline;
// }
// @media only screen and (max-width:550px){
//     font-size: 13px;
//     line-height: 16px;
// }
// `

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
// const Shop = styled(mainButton)`
// margin: 32px 0;
// `
export default AddressUpdate
