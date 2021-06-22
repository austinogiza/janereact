import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {Caption, H2} from '../styles/TextStyles'
import paystack from '../images/paystack.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

const Footer = () => {
    return (
        <div>
            <Footersectiion>

<Footercontainer>

    <Footericons>
    <ul>

        <li><a rel="noopener noreferrer" target="_blank" href="https://web.facebook.com/Janesfashionn/"><Footersocial  src={facebook} alt="Jane's Fashion Social media"/></a></li>
        
        <li><a target="_blank" href="https://www.instagram.com/_janesfashion/" rel="noopener noreferrer"  ><Footersocial  src={instagram} alt="Jane's Fashion Social media" /></a></li>
    </ul>

    </Footericons>

    <Footerdetails>

<Footertext>    <Footerh1>Secured By Paystack</Footerh1></Footertext>
    <Footerimage >

<Paystack src={paystack}  alt="Jane's Fashion Paystack" />
</Footerimage>
 




    </Footerdetails>
    <FooterLinks>

<ul>



    <li><Link to='/about' >About Us</Link></li>
    <li><Link to='/blog' >Blog</Link></li>
    <li><Link to='/faq' >FAQ</Link></li>
    <li><Link to='/returns' >Returns Policy</Link></li>
    <li><Link to='/contact' >Contact Us</Link></li>
    
</ul>
    </FooterLinks>
    <Footercopy>
        <Footercopyright>

&copy; All rights served. Jane's Fashion {new Date().getFullYear()}
        </Footercopyright>
    </Footercopy>
</Footercontainer>
            </Footersectiion>
        </div>
    )
}

const Footercopy = styled.div`
width:100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Footercopyright = styled(Caption)`
color: ${themes.white};
text-transform: capitalize;
font-family: "Inter", sans-serif;
`
const Footersectiion = styled.div`
width:100%;
min-height:350px;
background: ${themes.black};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Footercontainer = styled.div`
  font-family: "Inter", sans-serif;
max-width:1200px;

height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 25px;
`

const Footersocial = styled.img`
width: 100%;
height: 100%;
transition: 0.3s ease-in;

:hover{
    transform: scale(1.1);
}

`

const Footerh1 = styled(H2)`
color: ${themes.white};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 8px 0;

`

const FooterLinks = styled.div`
text-align: center;
margin: 8px 0;
width: 100%;
min-height: 50px;
display: flex;
    flex-direction: row;
    justify-content: center;
align-items: center;
ul{
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 550px){
        flex-direction: column;
        text-align: justify;
    }
    li{
        padding: 10px 15px;
        list-style-type: none;

        a{
            color: ${themes.white};
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 500;
            transition: 0.3s;
            :hover{
                color: ${themes.jane};
            }
        }
    }
}
`
const Footericons = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin: 8px 0;
ul{
    display: flex;
    flex-direction: row;

    li{
        padding: 10px 15px;
    }
}

`
const Footerdetails = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 8px 0;
text-align: center;
`

const Footertext = styled.div`
height: 100%;
width: 100%;
margin: 8px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`
const Footerimage = styled.div`

width: 100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

const Paystack = styled.img`
width: 60px;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and(max-width: 550px){
    width: 40px;
height: 40px;
}
`
export default Footer
