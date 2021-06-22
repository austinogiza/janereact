import React from 'react'
import styled from 'styled-components'
import {H1, H3, P} from '../styles/TextStyles'
import { themes } from  '../styles/ColorStyles'

const Faq = () => {
    return (
      <Returnspage>

          <ReturnsContainer>
<Returnsleft>
    <Returnsh1>Frequently Asked Questions</Returnsh1>
    <Returnslink>
    
        <a href="mailto:support@janes-fashion.com">Support@janes-fashion.com</a>
    </Returnslink>
</Returnsleft>

<Returnright>
<Faqcard>
    
<Returnsh2>How do I place an order</Returnsh2>
<Returnsp>
You simply place an order by clicking buy now on the products and checking out after filling your billing details and payment details. That simple.
</Returnsp>
</Faqcard>

<Faqcard>
<Returnsh2>Can I get a discount
</Returnsh2>
<Returnsp>
For now, no, however, during our promos and sales, any discount or coupon will be communicated
</Returnsp>
</Faqcard>

<Faqcard>
<Returnsh2>How long will it take to get my items after I make payment</Returnsh2>
<Returnsp>
Delivery is on or before 72 hours.
</Returnsp>
</Faqcard>
<Faqcard>
<Returnsh2>Privacy Policy</Returnsh2>
<Returnsp>
Information we collect
The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. When you register for an Account, we may ask for your contact information, including items such as name, address, and email address.
</Returnsp>
</Faqcard>
</Returnright>
          </ReturnsContainer>

      </Returnspage>
    )
}

const Returnspage = styled.div`
min-height: 400px;
width:100%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Faqcard = styled.div`

margin: 8px 0;
width: 100%;
height: 100%;
`
const ReturnsContainer = styled.div`
max-width:1200px;

height: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 400px auto;
grid-auto-rows: minmax(200px, auto);
justify-content: center;
align-items: center;
padding: 10px 25px;
grid-gap: 30px;

@media only screen and (max-width: 650px){
    grid-template-columns: 1fr;
grid-auto-rows: minmax(100px, auto);

}
`
const Returnsleft = styled.div`
width:100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`


const Returnsh1 = styled(H1)`
color: ${themes.black};
margin: 8px 0;
`


const Returnslink = styled.div`
width: 100%;
height: 10px;
margin: 8px 0;
a{
    text-decoration: none;
    color: ${themes.grey};
 
    transition: 0.3s ease-in;
    font-size: 17px;
    text-transform: none;

:hover{
    color: ${themes.jane};

}
}


`
const Returnright = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 4px 0;

`
const Returnsh2 = styled(H3)`
color: ${themes.black};
margin: 4px 0;

`
const Returnsp = styled(P)`
margin: 4px 0;
color: ${themes.grey};
text-align: left;

`

export default Faq;
