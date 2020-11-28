import React from 'react'
import styled from 'styled-components'
import Bonus from '../components/Bonus'
import { themes } from '../styles/ColorStyles'
import {H2, H3, P, Small} from '../styles/TextStyles'

const About = () => {
    return (
<Aboutbody>

<Aboutcontainer>


<Header>
<Headerh3><Span>"GIVING THE BEST </Span>AT THE BEST PRICE"</Headerh3>

</Header>

<Aboutrow>
<Aboutimage>
    <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606140071/about_nznrzu.jpg"  alt="Jane's Fashion" />
</Aboutimage>
<Abouttext>
    <Abouth2>Who Are <Span>We?</Span></Abouth2>
    <Aboutp>Jane's Fashion is an online shop. We sell male and female fashion items.
We import our items directly from the manufacturers and sell in wholesale and retail.</Aboutp>
</Abouttext>

</Aboutrow>


<Aboutrow>

<Abouttext>
    <Abouth2>What We <Span>Do?</Span></Abouth2>
    <Aboutp>Jane's Fashion is an online shop. We sell male and female fashion items.
We import our items directly from the manufacturers and sell in wholesale and retail.</Aboutp>
</Abouttext>
<Aboutimage>
    <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606049630/about_zsw1ew.jpg"  alt="Jane's Fashion" />
</Aboutimage>

</Aboutrow>

<Team>

<Teamtitle>
    <Titleh2>Team members</Titleh2>

</Teamtitle>
<Teamcard>

    <Teamsingle>
        <Teamimage src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1606049630/2_3_pijht2.jpg" alt="Jane's Fashion team"/>
        <Teamname>Osasogie Igbinere</Teamname>
        <Teamrole>manager</Teamrole>     
    </Teamsingle>
  

  
</Teamcard>


</Team>
        
</Aboutcontainer>
<Bonus/>

</Aboutbody>
    )
}


const Aboutbody = styled.div`
width: 100%;
height:100%; 
min-height: 600px;
margin: 16px 0;

`
const Aboutcontainer = styled.div`
width: 100%;
height:100%; 
max-width: 1200px;
margin: 0 auto;
padding: 10px 25px;

`
const Header = styled.div`
width: 100%;
height:100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

`
const Headerh3 = styled(H3)`
width: 100%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  

`
const Aboutrow = styled.div`
width: 100%;
height:100%; 
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 40px;
margin: 24px 0;
grid-auto-rows: minmax(200px,auto);
@media only screen and (max-width:550px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 10px;
    margin: 8px 0;
}
`
const Span = styled.span`
color: ${themes.jane};
`
const Abouth2 = styled(H2)`
margin: 8px 0;
`
const Aboutp = styled(P)`
color: ${themes.grey};
`

const Aboutimage = styled.div`
width: 100%;
height:100%; 

`
const Aboutimg = styled.img`
width: 100%;
max-width: 400px;
height:100%;
max-height: 500px; 

`
const Abouttext = styled.div`
width: 100%;
height:100%; 

`

const Team = styled.div`
width: 100%;
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
`
const Teamtitle = styled.div`
width: 100%;
height:50px;

`
const Titleh2 = styled(H3)`
width: 100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-transform: capitalize;
`
const Teamcard = styled.div`
width: 100%;
height:100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 30px;
grid-auto-rows: minmax(300px,auto);

@media only screen and (max-width:850px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
    margin: 8px 0;
}

@media only screen and (max-width:550px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 10px;
    margin: 8px 0;
}
`
const Teamsingle = styled.div`
width: 100%;
height:100%;
transition: 0.3s ease-in;
:hover{
    transform: scale(1.04);
}
`
const Teamimage = styled.img`
width: 100%;
height:200px;
`
const Teamrole = styled(Small)`
width: 100%;
color: ${themes.grey};
text-transform: capitalize;
margin: 8px 0;
`

const Teamname = styled(P)`
width: 100%;
text-transform: capitalize;
color: ${themes.black};
margin: 8px 0;
`


export default About
