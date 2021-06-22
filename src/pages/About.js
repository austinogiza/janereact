import React from 'react'
import styled from 'styled-components'
import { igButton, mainButton } from '../styles/Button'

import { themes } from '../styles/ColorStyles'


const About = () => {
    return (
<Aboutbody>




<Header className="mb-2 -mt-3.5 max-h-96  h-96 py-5 px-4 bg-blue-50">
<Headerh3 className=" max-w-2xl mx-auto text-center" >
<Coverh1 className="2xl:text-6xl lg:text-6xl xl:text-6xl text-3xl mb-2 mt-2">"GIVING THE BEST AT THE BEST PRICE"</Coverh1>
    <Coverp className="text-base  text-gray-500 mb-2">Jane's Fashion is an online shop. We sell male and female fashion items.
We import our items directly from the manufacturers and sell in wholesale and retail.</Coverp>
<Coverbutton className="mt-7" to='/shop'>Shop Now</Coverbutton>
</Headerh3>

</Header>


<Aboutcontainer>
<Aboutrow className=" mt-10  mb-12 max-w-4xl mx-auto w-full min-h-0 h-auto flex flex-col justify-center items-center">

    <Aboutcover className="text-center">
    <Abouth2 className=" text-lg font-normal mt-2 mb-2"><Span>Who Are We?</Span></Abouth2>
    <Abouttext className="text-gray-500 text-xl font-medium mb-4">Jane's Fashion is an online shop. We sell male and female fashion items.
We import our items directly from the manufacturers and sell in wholesale and retail.</Abouttext>
    <Aboutimage className=" gap-5 mt-10 mb-4 max-w-4xl mx-auto w-full h-full grid lg:grid-cols-3 grid-cols-1 2xl:grid-cols-3">
    <Aboutimg className="max-w-md h-full max-h-80 w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313709/591ca9e0-790f-4b86-b23f-b675d48a21ed_g89ztb.jpg"  alt="Jane's Fashion" />
    <Aboutimg className="max-w-md h-full max-h-80 w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313708/49ba4a6e-a9cf-4f76-8f49-4a1830b33dd4_yxvdl8.jpg"  alt="Jane's Fashion" />
    <Aboutimg className="max-w-md h-full max-h-80 w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313709/959cc9cd-a01b-48c4-9da5-be29fbcdea9a_pzyqib.jpg"  alt="Jane's Fashion" />
   
</Aboutimage>
    </Aboutcover>
</Aboutrow>

</Aboutcontainer>
<Team className=" mt-10 mb-10 py-4 px-4 flex flex-col max-w-6xl  mx-auto w-full h-full min-h-full">

<Teamtitle className=" max-w-sm w-full mt-2 mb-5  min-h-full h-full flex flex-col">
<Span className="text-lg mt-2 mb-2 font-medium">Team members</Span>
    <Titleh2 className='text-xl lg:text-4xl 2xl:text-4xl font-bold text-black'>The amazing people behind Jane's Fashion</Titleh2>
</Teamtitle>
<Teamcard className="  mt-6  mb-6 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  gap-5">

    <Teamsingle className="max-w-md max-h-96 h-full w-full flex flex-col text-center">
        <Teamimage className="h-full max-h-96 max-w-md w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624314323/60a5c1bcbc4f722522df1ec2_dana-cutts-salon-webflow-template-p-500_a5yakh.jpg" alt="Jane's Fashion team"/>
        <Teamname className="text-xl font-medium mt-2 mb-2 text-black">Osasogie Igbinere</Teamname>
        <Teamrole className="text-lg">manager</Teamrole>     
    </Teamsingle>
    <Teamsingle className="max-w-md max-h-96 h-full w-full flex flex-col text-center">
        <Teamimage className="h-full max-h-96 max-w-md w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624314323/60a5c1bcbc4f722522df1ec2_dana-cutts-salon-webflow-template-p-500_a5yakh.jpg" alt="Jane's Fashion team"/>
        <Teamname className="text-xl font-medium mt-2 mb-2 text-black">Osasogie Igbinere</Teamname>
        <Teamrole className="text-lg">manager</Teamrole>     
    </Teamsingle>

    <Teamsingle className="max-w-md max-h-96 h-full w-full flex flex-col text-center">
        <Teamimage className="h-full max-h-96 max-w-md w-full" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624314323/60a5c1bcbc4f722522df1ec2_dana-cutts-salon-webflow-template-p-500_a5yakh.jpg" alt="Jane's Fashion team"/>
        <Teamname className="text-xl font-medium mt-2 mb-2 text-black">Osasogie Igbinere</Teamname>
        <Teamrole className="text-lg">manager</Teamrole>     
    </Teamsingle>


  
</Teamcard>


</Team>
        

<Aboutrow className="flex flex-col w-full py-4 px-4 bg-black h-full min-h-full justify-center items-center">
<Aboutp className="lg:text-4xl 2xl:text-4xl xl:text-4xl text-2xl text-white mt-6 mb-4">Follow us on Instagram
</Aboutp>

<Aboutcover className='max-w-7xl grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-10 mb-6 gap-5 mx-auto h-full '>

    <Aboutimage className='h-full flex flex-col min-h-full max-w-xs'>

        
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313707/d6a2c859-3ac5-4689-9377-fc55c35e5471_bxqzee.jpg" className=' px-2 py-2 max-h-64 h-full w-full'/>
            
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313708/4fcec200-6cbe-44b3-8b27-1214ae13839a_c2z6ml.jpg" className=' px-2 py-2 max-h-64 h-full w-full'/>
            
    </Aboutimage>
    <Aboutimage className='h-full flex flex-col min-h-full max-w-xs'>

        
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313708/42fff46b-a29d-447a-bb30-663c47506170_sbodcb.jpg" className=' px-2 py-2 max-h-64 h-full w-full'/>
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313708/6a2d7c13-0fd7-44e7-8a47-b2ad2b30ee13_sm2s6d.jpg" className=' px-2 py-2 max-h-64 h-full w-full'/>
            
    </Aboutimage>
    <Aboutimage className='h-full flex flex-col min-h-full max-w-xs'>

        
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313708/6cdc0d60-2c34-40cf-aa02-82cda6b561e8_bdxdpm.jpg" className=' px-2 py-2  max-h-96 h-full w-full'/>
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313707/3d8608ad-7adb-4e1c-a226-4682ed136175_jkjtpx.jpg" className=' px-2 py-2  max-h-96 h-full w-full'/>
           
            
    </Aboutimage>
    <Aboutimage className='h-full flex flex-col min-h-full max-w-xs'>

        
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313707/ee3441b3-cc06-4a6b-9a0a-531a17430ef1_xftgld.jpg" className=' px-2 py-2 max-h-96 h-full w-full'/>
            <Aboutimg src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313707/fe1cf7f2-a43c-46ee-8d31-9a3f455b5ac0_f8v97u.jpg" className=' px-2 py-2 max-h-96 h-full w-full'/>
            
    </Aboutimage>
</Aboutcover>

<Aboutbutton className="mt-6 mb-6" href="https://www.instagram.com/_janesfashion/" target="_blank" rel="noopener noreferrer">Follow us</Aboutbutton>
</Aboutrow>

</Aboutbody>
    )
}


const Aboutbody = styled.div`
width: 100%;
height:100%; 
min-height: 400px;
margin: 16px 0;

`

const Aboutbutton = styled(igButton)`

`
const Aboutp = styled.h1``
const Aboutcontainer = styled.div`
width: 100%;
height:100%; 
max-width: 1200px;
margin: 0 auto;
padding: 10px 25px;

`
const Header = styled.div`
width: 100%;
min-height: 600px !important;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

`
const Headerh3 = styled.h1`
width: 100%;
height:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  

`
const Aboutrow = styled.div`

`
const Span = styled.span`
color: ${themes.jane};
`
const Abouth2 = styled.h2`
margin: 8px 0;
`

const Aboutcover = styled.div`

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

`
const Teamtitle = styled.div`
width: 100%;


`

const Titleh2 = styled.h3`

`
const Coverh1 = styled.div`

`
const Coverp = styled.div`

`
const Coverbutton = styled(mainButton)`

`
const Teamcard = styled.div`

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

`
const Teamrole = styled.h2`
width: 100%;
color: ${themes.grey};
text-transform: capitalize;

`

const Teamname = styled.p`
width: 100%;
color: ${themes.black};

`


export default About
