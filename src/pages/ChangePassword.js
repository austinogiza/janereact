import React, { useState, useEffect} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import { submitButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import {Small, H2} from '../styles/TextStyles'
import {passwordConfirmResetURL} from '../constants'
import { connect} from 'react-redux'
import { fetchCart } from '../store/actions/cart'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChangePassword = (props) => {

    const initial = {
      new_password1: "",
      new_password2: ""

    }

    const [form, setForm] = useState(initial)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [formError, setFormError] = useState(null)
    const { authenticated} = props;
    const {uuid} = useParams()
    const {token} = useParams()

    useEffect(() => {
  
}, [])
    const {
      new_password1,
      new_password2

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
        setFormError(null)
    }

    const onSubmit = e=>{
        e.preventDefault();
        setLoading(true)
     if(new_password1.length>=5 && new_password2.length>=5){

      if(new_password1 === new_password2){
        axios
     .post(passwordConfirmResetURL, {uuid,token, new_password1, new_password2})
     .then(res=>{
      setLoading(false)
      setForm(initial)
      toast.success("We've reset your password. Do login")
     
     })
     .catch(err=>{
      setLoading(false)
     })
      }
      else{
        setLoading(false)
        setFormError("Passwords do not match")
      }
     }
    }


    return (
       <Loginpage>
       <ToastContainer/>
       <LoginContainer>
       <Logintitle>
           <Loginh2>RESET ACCOUNT PASSWORD</Loginh2>
           <Loginh4>Enter a new password </Loginh4>
       </Logintitle>
       <Loginform onSubmit={onSubmit}>
       {error && <Formmessage><p>{error}</p></Formmessage>}
    <Label>
      <Logininput type="password" required placeholder="Password" onChange={onChange} name="new_password1" value={new_password1} />
    
       {formError && <Formmessage><p>{formError}</p></Formmessage>}
       </Label>
       <Label>
      <Logininput type="password" required placeholder="Confirm Password" onChange={onChange} name="new_password2" value={new_password2} />
      {formError && <Formmessage><p>{formError}</p></Formmessage>}
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
text-align: center;
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

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);
