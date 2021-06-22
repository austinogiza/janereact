import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import AccountSidebar from '../components/AccountSidebar'
import { fetchCart } from '../store/actions/cart'
import { mainButton } from '../styles/Button'
import { product } from '../styles/TextStyles'


const AccountLayout = (props) => {


const {authenticated} = props;
  useEffect(() => {
    document.title = `Jane's Fashion Dashoard`
   if(authenticated){
    props.fetchCart()
   }else{
    props.fetchCart()
   }
    
  }, [])
  return (

<Accountbody>
{authenticated ?
  <>

   <ToastContainer/>
     <Container>
       <AccountSidebar/>
       <Accountcover>
         {props.children}
       </Accountcover>

     </Container>
 
  </>:

  <>

  <NoItem>
   <Noitemh1>
     You are not logged in
   </Noitemh1>
   <Shop to='/login'> Login</Shop>
 </NoItem>
  </>
}
</Accountbody>
  )
}

const Accountbody = styled.div`
width: 100%;
min-height: 500px;
margin-top: 40px;
`
const Container = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
padding: 10px 15px;
display: grid;
grid-template-columns: 400px auto;
grid-gap: 40px;

@media only screen and (max-width: 800px){
  grid-template-columns: 300px auto;
}

@media only screen and (max-width: 650px){
  grid-template-columns: 1fr;
  grid-gap: 0px;
  max-width: 100%;

}
`

const Accountcover = styled.div`
width: 100%;
height:100%;
margin: 16px 0;
`




const NoItem = styled.div`
width: 100%;
height:200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Noitemh1 = styled(product)`

`
const Shop = styled(mainButton)`
margin: 32px 0;
`

const mapStateToProps = state =>{
  return {
    authenticated: state.auth.token !== null,

  }
};

const mapDispatchToProps = dispatch =>{
    return{
   
      fetchCart: () => dispatch(fetchCart())
      
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(AccountLayout)
