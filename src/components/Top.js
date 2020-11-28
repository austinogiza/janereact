import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaChevronUp} from 'react-icons/fa'
import { themes } from '../styles/ColorStyles'

const Top = () => {

    const [showScroll, setShowScroll] = useState(false)



    
 useEffect(() => {
   window.addEventListener('scroll', checkScrollTop);
  
 }, [])

  const checkScrollTop = e =>{
    
   if ( window.pageYOffset > 100 ){
      setShowScroll(true)
   }

   else{
      setShowScroll(false)

   }
}


    const backToTop = e =>{

        window.scrollTo(0,0);
    }


    return (
      <Topback style={{display: showScroll? "flex": "none" }} onClick={backToTop}>

         <Topcenter> <Topicon></Topicon></Topcenter>
      </Topback>
    )
}

const Topback = styled.div`
position: fixed;
z-index: 300;
bottom: 20px;
right: 30px;
height: 50px;
width: 50px;
background: ${themes.jane};
border-radius: 50%;
cursor: pointer;
box-shadow: ${themes.shadow};
`

const Topcenter = styled.div`
height: 100%;
z-index: 300;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
`
const Topicon = styled(FaChevronUp)`
height: 24px;
width: 24px;
color: ${themes.white};
display: flex;
justify-content:center;
align-items: center;
`

export default Top
