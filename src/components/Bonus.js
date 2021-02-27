import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {MdAttachMoney, MdChatBubble, MdLocalShipping} from 'react-icons/md'
import { Caption, P } from '../styles/TextStyles'


const Bonus = () => {
    return (
      <Containericon>

          <Bonusbox>

          <Bonusinner>
              <Covericon>
              <Iconship/>
              </Covericon>
                  <Cover>
                  <Bonush2>
                  Free Shipping
                  </Bonush2>
                  <Bonusp>Free shipping on all order above &#x20a6;10,000</Bonusp>
                  </Cover>
              </Bonusinner>


              <Bonusinner>
              <Covericon>
                  <Iconchat/>
              </Covericon>
                  <Cover>
                  <Bonush2>
                  Online Support
                  </Bonush2>
                  <Bonusp>Support online 24-7</Bonusp>
                  </Cover>
              </Bonusinner>
              <Bonusinner>
              <Covericon>
              <Iconcash/>
              </Covericon>
                  <Cover>
                  <Bonush2>
                  Secure Payment
                  </Bonush2>
                  <Bonusp>All cards accepted</Bonusp>
                  </Cover>
              </Bonusinner>
          </Bonusbox>
      </Containericon>
    )
}

const Containericon = styled.div`
min-height:200px;
width: 100%;
padding: 10px 25px;
`
const Bonusbox = styled.div`
max-width: 900px;
min-height:100px;
width: 100%;
margin: 16px auto;
border: 1px solid ${themes.black};
padding: 10px 15px;

display: grid;
grid-template-columns: repeat(3,1fr);
align-items: center;
justify-content: center;
grid-gap: 30px;
@media only screen and (max-width:550px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 20px;
 
}
`
const Bonusinner = styled.div`

height:100%;
width: 100%;
display: flex;
flex-direction:row;
justify-content: center;
align-items:center;


`
const Covericon = styled.div`
height:100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
flex: 0 0 20%;
margin: 0 8px;
`

const  Iconship = styled(MdLocalShipping)`
width: 32px;
height: 32px;
color: ${themes.grey};`

const  Iconchat= styled(MdChatBubble)`
width: 32px;
color: ${themes.grey};
height: 32px;`

const  Iconcash= styled(MdAttachMoney)`
width: 32px;
color: ${themes.grey};
height: 32px;`

const Cover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
flex:1;
justify-content: center;
`
const Bonush2 = styled(P)`
color: ${themes.black};
`
const Bonusp = styled(Caption)`
color: ${themes.grey};
`

export default Bonus
