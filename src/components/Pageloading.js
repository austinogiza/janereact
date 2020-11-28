import React from 'react'
import styled from 'styled-components';
import animation from '../Lottie/page.gif'

const Pageloading = () => {

    return (
       <Lottiepage>
      <img src={animation} alt="{Jane's Page loading"/>


       </Lottiepage>
    )
}

const Lottiepage =styled.div`
width: 100%;
height:100%;
` 

export default Pageloading
