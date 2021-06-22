import React, { useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import { submitButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import {H2,P, Small } from '../styles/TextStyles'
import {authLogin as login} from '../store/actions/auth'
import { connect} from 'react-redux'
import { fetchCart } from '../store/actions/cart'

const Login = (props) => {

    const initial = {
        email: "",
        password:"",
    }

    const [form, setForm] = useState(initial)
    const {loading, error, authenticated} = props;
    const [formError, setFormError] = useState(null)
    const [emailError, setEmailError] = useState(null)
const [passwordError, setPasswordError] = useState(null)
const [border, setBorder]=useState(false)
const [emailBorder, setEmailBorder]=useState(false)
const [passwordBorder, setPasswordBorder]=useState(false)

    useEffect(() => {
  
  return () => {
    setFormError(null)
    setEmailError(null)
    setPasswordError(null)
  }
}, [])
    const {
        email,
        password
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
        setEmailError(null)
        setPasswordError(null)
        setBorder(false)
setEmailBorder(false)
setPasswordBorder(false)
    

    }

    const onSubmit = e=>{
        e.preventDefault();

        if( email !== "" && password !== ""){
            setFormError(null)
            props.login(email,password);
          

        }
        else{
           if(password === ""){
                setPasswordError("Please enter your password")
                setPasswordBorder(true)
            }
        if(email ===""){
                setEmailError("Please enter your email address")
                setEmailBorder(true)
            }
          


        }
     

       
    }


    return (
       <Loginpage>
       <LoginContainer>
       <Logintitle>
           <Loginh2>Welcome Back</Loginh2>
       </Logintitle>
       <Loginform onSubmit={onSubmit}>
       {error && <Formmessage><p>{error}</p></Formmessage>}
       {formError && <Formmessage><p>{formError}</p></Formmessage>}
    <Label>
    <LabelName>Email</LabelName>
      <Logininput type="email" className={(border && 'form-error') || (emailBorder && 'form-error')} placeholder="Your Email" onChange={onChange} name="email" value={email} />
  
       {emailError && <Formmessage><p>{emailError}</p></Formmessage>}
             </Label>
       <Label>
       <LabelName>Password</LabelName>
       <Logininput className={(border && 'form-error') || (passwordBorder && 'form-error')} type="password" placeholder="Enter Password" onChange={onChange} name="password" 
       value={password} />
       {passwordError && <Formmessage><p>{passwordError}</p></Formmessage>}
    
       </Label>
       <Forgot><Link to='/account/login/reset'>Forgot Password?</Link></Forgot>


       <Loginbutton type="submit"> {loading ? <Loading /> : "Login"}</Loginbutton>

    
           
       </Loginform>
       <Loginsignup>

           <Loginh3> Don't have an account? <Link to='/signup'>Sign Up</Link></Loginh3>
       </Loginsignup>

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
height: 50px;
margin: 32px 0;
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

const Forgot = styled.div`
width: 100%;
height: 10px;
margin: 8px 0;

a{
    font-size: 14px;
    color: ${themes.jane};
    transition: 0.3s ease-in;

    :hover{
        color: ${themes.black};
    }
}
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
min-height: 10px;
text-align: center;
margin: 8px auto;
color:  ${themes.red};
`
const Logininput = styled(formInput)`

`
const Loginbutton = styled(submitButton)`
margin: 16px 0;
`
const Loginsignup = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 16px 0;
width: 100%;
height: 30px;
`
const Loginh3 = styled(P)`
color: ${themes.grey};

a{
    font-size: 18px;
    font-weight: 600;
    color: ${themes.jane};
    transition: 0.3s ease-in;

    :hover{
        color: ${themes.black};
    }
}
`

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        login: (email,password) => dispatch(login(email,password)),
        fetchCart: () => dispatch(fetchCart())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
