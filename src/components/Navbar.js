import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import logo from '../images/logo.svg'
import { Link, Route} from 'react-router-dom'
import { BiCart, BiLogOut, BiUser } from 'react-icons/bi'
import { connect } from 'react-redux'
import {logout} from '../store/actions/auth'
import { fetchCart } from '../store/actions/cart'
import SearchBox from './SearchBox'
import MobileSearch from './MobileSearch'



const Navbar = (props) => {
  const [menu, setMenu] = useState(false)
  const [handleLogout, setHandleLogout]= useState(false)
  const { authenticated, cart, emptyCart} = props;


  const toggle = e => {
    setMenu(!menu)
  }


  useEffect(() => {
  props.fetchCart()
},[])


if(handleLogout){
  props.logout()
  props.fetchCart()
}

  return (
    <Nav>

      <Navcontainer>

        <Navtop>
          <Searchcover>
         <Route render={({history}) =>  <SearchBox history={history}/>} /> 
      
              <Mobilesearch onClick={toggle}>

                <Menucontainer>
                  <Menuspan></Menuspan>
                  <Menuspan></Menuspan>
                  <Menuspan></Menuspan>
                </Menucontainer>
              </Mobilesearch>
       

          </Searchcover>
          <Navlogo>
            <Link to='/'><JaneLogo src={logo} />  </Link>

          </Navlogo>

          <Cart>
          { authenticated ? <><Cartlogout onClick={ () => setHandleLogout(true)}>
<Logouticon/></Cartlogout>  <Cartsignin> <Link to='/account'><Signinicon /></Link></Cartsignin> </>: <Cartsignin> <Link to='/login'><Signinicon /></Link>


            </Cartsignin> }
            <Carticon>
              {authenticated ?<> {cart !== null && <Link to='/cart'> <Carticonsmall /> {cart !== null && cart.order_items.length }  </Link>  } {emptyCart && <> <Link to='/cart'> <Carticonsmall /> 0 </Link> </>}</>: <Link to='/login'>  <Carticonsmall />0</Link>}
            </Carticon>
           
            

              

          </Cart>
        </Navtop>

        <Navbottom>
          <MobileSearchcover>
          <Route render={({history}) =>  <MobileSearch history={history}/>} /> 

          </MobileSearchcover>
          <NavLinks>
            <JaneLink>
              <JaneLinks>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>

              </JaneLinks>
            </JaneLink>


          </NavLinks>



        </Navbottom>
      </Navcontainer>


    </Nav>
  )
}


const Nav = styled.div`
height: 140px;
width:100%;
background: ${themes.black}
`

const Navcontainer = styled.div`
max-width: 1200px;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 10px 25px;
`
const Navtop = styled.div`
display: grid;
grid-template-columns:1.2fr 2fr 1fr;
grid-gap: 30px;

align-items: center;
height: 70px;
width: 100%;
padding: 15px 10px;

`
const Searchcover = styled.div`
height: 50px;
width: 100%;
max-width: 400px;
`

const Mobilesearch = styled.div`
display: none;
color: ${themes.white};
height: 32px;
width: 32px;
margin: 8px;
cursor: pointer;
@media only screen and (max-width:650px){
  display: block;
}
`

const Menucontainer = styled.div`
height: 32px;
width: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Menuspan = styled.span`
height: 2px;
border-radius: 5px;
width: 100%;
background: ${themes.white};
margin-bottom: 4px;
`


const MobileSearchcover = styled.div`
height: 50px;
width: 100%;
display: none;
@media only screen and (max-width: 650px){
display: flex;
}
`

const Cart = styled.div`
display: flex;
flex-direction: row;
width: 100%;
max-width: 150px;

`

const Cartsignin = styled.div`
color: ${themes.white};
height: 50px;
width: 100%;
font-size: 18px;
font-weight:500;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
cursor: pointer;
a{
  display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
  color: ${themes.white};
}
p{
  font-size: 18px;
}


@media only screen and (max-width:650px){
  p{
 display: none;
}
}

`
const Cartlogout = styled.div`
color: ${themes.white};
height: 50px;
width: 100%;
font-weight:500;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
cursor: pointer;
a{
  display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
  color: ${themes.white};
}

p{
  font-size: 18px;
}
@media only screen and (max-width:650px){
  p{
 display: none;
}}
`

const Carticon = styled.div`
color: ${themes.white};
cursor: pointer;
height: 50px;
width: 100%;
font-size: 18px;
font-weight:500;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
a{
  display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
  color: ${themes.white};
}
`

const Signinicon = styled(BiUser)`
color: ${themes.white};
height: 32px;
width: 32px;
margin: 8px;
@media only screen and (max-width: 650px){
  height: 24px;
width: 24px;
}
`
const Logouticon = styled(BiLogOut)`
color: ${themes.white};
height: 32px;
width: 32px;
margin: 8px;
@media only screen and (max-width: 650px){
  height: 24px;
width: 24px;
}

`
const Carticonsmall = styled(BiCart)`
color: ${themes.white};
height: 32px;
width: 32px;
margin: 8px;
@media only screen and (max-width: 650px){
  height: 24px;
width: 24px;
}
`


const Navbottom = styled.div`
height: 50px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;


`

const Navlogo = styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const NavLinks = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media only screen and (max-width: 650px){
  display:none;
}

`
const JaneLogo = styled.img`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 130px;
height: 80px;
@media only screen and (max-width:650px){
  width: 70px;
height: 70px;
}
`
const JaneLink = styled.ul`
padding: 10px 15px;
`
const JaneLinks = styled.li`
text-transform: uppercase;

a{
  padding: 10px ;
  color: ${themes.white};
  font-size: 17px;
  font-weight: 500;
}
`
const mapStateToProps = state =>{
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    emptyCart: state.cart.shoppingCart === null
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      logout: ()  => dispatch(logout()),
      fetchCart: () => dispatch(fetchCart())
      
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
