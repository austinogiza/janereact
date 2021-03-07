import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageSkeleton from '../components/PageSkeleton'
import { getUserDetails,addressListUrl, orderedItemsURL} from '../constants'
import AccountLayout from '../container/AccountLayout'
import { themes } from '../styles/ColorStyles'
import { HeaderLight,medium,product,NewCaption} from '../styles/TextStyles'
import { authAxios } from '../utils'

const Account = () => {
  const [loading, setLoading] =useState(false)
  const [data, setData] =useState([])
  const [address, setAddress] =useState([])
  const [ordered, setOrdered] =useState([])
  const fetchAddress = ()=>{
  
    authAxios
    .get(addressListUrl)
    .then(res=>{
      setAddress(res.data)
  
    })
    .catch(err=>{

    })
  }
  const fetchOrdered =()=>{

    authAxios
    .get(orderedItemsURL)
    .then(res=>{
      setOrdered(res.data)

    })
    .catch(err=>{
    

    })

  }
  const fetchUserDetails =()=>{
    setLoading(true)
    authAxios
  .get(getUserDetails)
  .then(res=>{
    setData(res.data)
    setLoading(false)
  })
  .catch(err=>{
    setLoading(false)

  })
  }

useEffect(() => {
  fetchUserDetails()
  fetchAddress()
  fetchOrdered()

}, [])
  return (

    <AccountLayout>
<Accountbody>
{loading ? <PageSkeleton/>:
<>
<AccountHeader>
<Headertext>
HELLO, {data.first_name}
</Headertext>
<Headerintro>Welcome to your dashboard.</Headerintro>
</AccountHeader>
<AccountInfo>
<Accountdetails>
<AccountInfoHeader>
<AccountInfoText>ACCOUNT DETAILS</AccountInfoText>
</AccountInfoHeader>

<Accountname>{data.first_name} {data.last_name}</Accountname>
<Accountname>{data.email}</Accountname>
    
  </Accountdetails>
  <Accountaddress>
  
    <AccountInfoHeader>
<AccountInfoText>Address Book</AccountInfoText>
</AccountInfoHeader>

{address.length> 0 ? <>

  <Address to='/account/address'>
    Manage addresses ({address.length})
    </Address>
</>: <>

<NoItem>
  <Noitemmessage>You haven't placed any orders yet.</Noitemmessage>
</NoItem>
</>}
  
  </Accountaddress>
</AccountInfo>
<AccountInfo>
<Accountdetails>
<AccountInfoHeader>
<AccountInfoText>My Orders</AccountInfoText>
</AccountInfoHeader>
{ordered.length> 0? 
<>
<Address to='/account/order'>
    Manage orders ({ordered.length})
    </Address>
   

</>:<>

<NoItem>
  <Noitemmessage>You haven't placed any orders yet.</Noitemmessage>
</NoItem>
</>}
 
  </Accountdetails>
 
</AccountInfo>
</>}
</Accountbody>
    </AccountLayout>
  )
}

const Accountbody = styled.div`
min-height: 300px;
width: 100%;
`
const AccountHeader = styled.div`
min-height: 40px;
width: 100%;
`
const NoItem = styled.div`
min-height: 40px;
width: 100%;
`
const Noitemmessage = styled(NewCaption)`
color: ${themes.grey};
`
const AccountInfoHeader = styled.div`
min-height: 40px;
width: 100%;
border-bottom: 0.4px solid ${themes.grey};
display: flex;
justify-content: flex-start;
align-items: center;
margin: 16px 0;
`
const AccountInfoText = styled(product)`
text-transform: uppercase;
font-weight: 700;
margin: 4px 0;
`
const Headertext = styled(HeaderLight)`
text-transform: uppercase;
font-weight: 700;
margin: 4px 0;
`

const Accountname = styled(medium)`
text-transform: none;
margin: 4px 0;
`
const Headerintro = styled(medium)`
color: ${themes.grey};
margin: 4px 0;
`
const AccountInfo = styled.div`
width: 100%;
min-height: 200px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 30px;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
}
`
const Accountdetails = styled.div`
width: 100%;
height: 100%;
`
const Accountaddress = styled.div`
width: 100%;
height: 100%;
`
const Address = styled(Link)`
text-decoration: underline;
color: ${themes.black};
transition: 0.3s ease-in;

font-size: 17px;
font-weight: 600;
line-height: 19px;
font-family: "Mulish", sans-serif;
@media only screen and (max-width:550px){
    font-size: 16px;
    line-height: 18px;
}
`

export default Account
