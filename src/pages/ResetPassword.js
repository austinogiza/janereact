import React, { useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import { submitButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import {Small, H2} from '../styles/TextStyles'
import {passwordResetURL} from '../constants'
import { connect} from 'react-redux'
import { fetchCart } from '../store/actions/cart'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = (props) => {

    const initial = {
        email: "",

    }

    const [form, setForm] = useState(initial)
    const [loading,setLoading]=useState(false)
    const {error, authenticated} = props;

    useEffect(() => {
  
}, [])
    const {
        email,

    } = form;

    if(authenticated){
        return <Redirect to='/'/>
     
        
    }
    if(authenticated){
        props.fetchCart()
        
    }


   
    const onChange = e=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value});
      
  
    

    }

    const onSubmit = e=>{
        e.preventDefault();
        setLoading(true)
     axios
     .post(passwordResetURL, {email})
     .then(res=>{
      setLoading(false)
      setForm(initial)
      toast.success("We've sent you an email with a link to reset your password.")
     
     })
     .catch(err=>{
      setLoading(false)
     })
    }


    return (
       <Loginpage>
       <ToastContainer/>
       <LoginContainer>
       <Logintitle>
           <Loginh2>RESET YOUR PASSWORD</Loginh2>
           <Loginh4>Please enter the e-mail address associated with your Jane's Fashion account. We will send you an email to reset your password.</Loginh4>
       </Logintitle>
       <Loginform onSubmit={onSubmit}>
       {error && <Formmessage><p>{error}</p></Formmessage>}
    <Label id="email">

       <LabelName>Email</LabelName>
      <Logininput type="email" id="email" required placeholder="Your Email" onChange={onChange} name="email" value={email} />
  
       </Label>
       
       <Loginbutton> {loading ? <Loading /> : "Reset Password"}</Loginbutton>

    
           
       </Loginform>

       </LoginContainer>
       <Banner/>

       </Loginpage>
    )
}
const Loginpage = styled.div`
width: 100%;
min-height: 600px;
`

const LoginContainer = styled.div`
width: 100%;
height: 100%;
max-width: 1200px;
margin: 32px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 10px 25px;

`

const Logintitle = styled.div`
width: 100%;
min-height: 50px;
margin: 32px auto;
max-width: 700px;
`
const Loginh2 = styled(H2)`
text-align: center;
`
const Loginform = styled.form`
display: flex;
flex-direction: column;
max-width: 500px;
margin: 16px auto;
width: 100%;
min-height: 300px;
`


const Label = styled.label`
width: 100%;
min-height: 50px;
transition: 0.4s ease-in;
display: flex;
flex-direction: column;
margin: 8px 0;
`
const LabelName = styled(Small)`

`
const Formmessage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 400px;
transition: 0.4s ease-in;
height: 10px;
text-align: center;
margin: 24px auto;
color:  ${themes.red};
`
const Logininput = styled(formInput)`

`
const Loginbutton = styled(submitButton)`
margin: 16px 0;
`

const Loginh4 = styled(Small)`
margin: 8px 0;
`

const mapStateToProps = state => {
    return {

        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch =>{
    return{

        fetchCart: () => dispatch(fetchCart())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ResetPassword);
