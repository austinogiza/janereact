import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <Nav>

      <Navcontainer>

        <Navtop>
        <Navlogo> 
          <Link to='/'><JaneLogo src={logo}/>  </Link>
    
          </Navlogo>
<Searchcover>
  <Search></Search>
  <Cart>


</Cart>
</Searchcover>

        </Navtop>

        <Navbottom>
        
          <NavLinks>
          <JaneLink>
            <JaneLinks>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>

            </JaneLinks>
          </JaneLink>


          </NavLinks>
         
          
       
        </Navbottom>
      </Navcontainer>


      </Nav>
    )
}


const Nav = styled.div`
height: 120px;
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
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 70px;
width: 100%;

`
const Searchcover = styled.div``
const Search = styled.div``

const Navbottom = styled.div`
height: 50px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Navlogo = styled.div`
width: 80px;
height: 80px;
`

const NavLinks = styled.div`

width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 10px 15px;
`
const JaneLogo = styled.img`
width: 100%;
height: 100%;
`
const JaneLink = styled.ul`

`
const JaneLinks = styled.li`


a{
  padding: 10px ;
  color: ${themes.white};
  font-size: 17px;
  font-weight: 500;
}
`

const Cart = styled.div``
export default Navbar
