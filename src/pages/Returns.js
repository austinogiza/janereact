import React from 'react'
import styled from 'styled-components'
import {H1, H3, P} from '../styles/TextStyles'
import { themes } from  '../styles/ColorStyles'

const Returns = () => {
    return (
      <Returnspage>

          <ReturnsContainer className='grid  gap-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 w-full h-full grid-cols-1 max-w-6xl mx-auto py-4 px-4'>
<Returnsleft className="text-left flex flex-col">
    <Returnsh1>Returns Policy</Returnsh1>
    <Returnslink>
    <a href="mailto:support@janes-fashion.com">Support@janes-fashion.com</a>
    </Returnslink>
</Returnsleft>

<Returnright>

<Returnsh2>Refund & Returns</Returnsh2>
<Returnsp>


When the item received is not what is paid for, you are entitled to a refund within 7 days, from the day you receive the item.
</Returnsp>
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
const ReturnsContainer = styled.div`

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

export default Returns
