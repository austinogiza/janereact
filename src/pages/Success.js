import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ghostButton, mainButton } from '../styles/Button'
import Lottie from 'react-lottie';
import animationData from '../images/check.json'
import {H2} from '../styles/TextStyles'
import { connect } from 'react-redux';
import { fetchCart } from '../store/actions/cart'
import { authAxios } from '../utils';
import { paymentCheckView, orderSummaryURL} from '../constants';
import PageSkeleton from '../components/PageSkeleton'

const Success = (props) => {

  const [pageLoading, setPageLoading] = useState(false)
  const [data, setData] = useState(null)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  
  const handleFetchCart = () =>{

    authAxios
    .get(orderSummaryURL)
    .then(res=>{
  
      console.log(res)
      if(res.status === 500){
        props.fetchCart()
      }
     
   
    }).catch(err=>{
 

    })
  }
  const fetchPaid=()=>{
    setPageLoading(true)
    authAxios
    .get(paymentCheckView)
    .then(res=>{
      setData(res.data)
      console.log(res)

      setPageLoading(false)
    })
    .catch(err=>{
      setPageLoading(false)
    })
  }

 

  
useEffect(() => {
  fetchPaid()
  handleFetchCart()

  document.title = "Payment Success - Jane's Fashion"
 

   return ()=>{
    props.fetchCart()
   }

  }, [])

  return (
   <SuccessView>

{pageLoading? <><PageSkeleton/></>:

<>

{
  data && <>

  <OrderImage>
   <Lottie 
	    options={defaultOptions}
        height={100}
        width={100}/>
</OrderImage>
     <Successheader>
     Order Successful!
     </Successheader>

     <SuccesButtons>
       <GoShop to='/shop'>Back to shop</GoShop>
       <GoDash to='/account'>Dashboard</GoDash>
     </SuccesButtons>

  </>

}

     

</>}
   </SuccessView>
  )
}


const SuccessView = styled.div`
width: 100%;
max-width: 800px;
margin: 0 auto;
min-height: 400px;
padding: 10px 19px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
`
const OrderImage = styled.div`
width: 130px;
height: 130px;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
margin: 16px 0;
`


const Successheader = styled(H2)``
const SuccesButtons = styled.div`
width: 100%;
margin: 32px 0;
display: flex;
flex-direction: row;
justify-content: center; 
align-items: center;
/* @media only screen and (max-width: 650px){
  flex-direction: column;
} */
`
const GoShop = styled(mainButton)`
margin: 8px;
`
const GoDash = styled(ghostButton)`
margin: 8px;
`

  
const mapStateToProps = state =>{
  return {
    authenticated: state.auth.token !== null,
 
  }
}

const mapDispatchToProps = dispatch =>{
    return{

      fetchCart: () => dispatch(fetchCart())
      
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Success)
