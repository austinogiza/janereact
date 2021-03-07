import React from 'react'
import styled from 'styled-components'
import {BiUser, BiHeart, BiBookAlt} from 'react-icons/bi'
import {FiShoppingBag} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {H2} from '../styles/TextStyles'

import {themes} from '../styles/ColorStyles'


const AccountSidebar = () => {
  return (
 <Sidebar>
   <Sideheader><Sidetitle>MY ACCOUNT</Sidetitle></Sideheader>
   <SidebarLink>
     <LinkRow>
<Link to='/account/'><Linkcover><AccountIcon/> ACCOUNT DETAILS</Linkcover></Link>
<Link to='/account/order'><Linkcover><OrderIcon/> MY ORDERS</Linkcover></Link>
<Link to='/account/address'><Linkcover><AddressIcon/> ADDRESS BOOK</Linkcover></Link>
<Link to='/account/wishlist'><Linkcover><SavedIcon/> SAVED ITEMS</Linkcover></Link>

     </LinkRow>
     
   </SidebarLink>
 </Sidebar>
  )
}
const Sidebar = styled.div`
width: 100%;
min-height: 300px;

`
const Sideheader = styled.div`
min-height: 50px;
width: 100%;
border-bottom: 1px solid ${themes.black};
`
const Sidetitle = styled(H2)``
const SidebarLink = styled.div`
width: 100%;
height: 100%;
`
const LinkRow = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
transition: 0.4s ease-in;


a{
  transition: 0.4s ease-in;
  color: ${themes.black};
  :hover{
  background: #fafafa;
}

}
`

const Linkcover =styled.li`
min-height: 60px;
width: 100%;
padding: 10px 15px;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid ${themes.black};
`

const AccountIcon = styled(BiUser)`
margin: 0 8px 0 0;
width: 24px;
height: 24px;
`
const OrderIcon = styled(FiShoppingBag)`
margin: 0 8px 0 0;
width: 24px;
height: 24px;

`
const AddressIcon = styled(BiBookAlt)`
margin: 0 8px 0 0;
width: 24px;
height: 24px;

`
const SavedIcon = styled(BiHeart)`
margin: 0 8px 0 0;
width: 24px;
height: 24px;

`
export default AccountSidebar
