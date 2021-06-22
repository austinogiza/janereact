import React, { useState,useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Bonus from '../components/Bonus'
import { submitButton } from '../styles/Button'
import Loading from '../components/Loading'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import {H2,P, Small } from '../styles/TextStyles'
import {authSignup as signup} from '../store/actions/auth'
import { connect } from 'react-redux'
const SignUp = (props) => {

    
const initial ={

    first_name: "",
last_name: "",
username: "",
email: "",
password1: "",
password2: ""
}
    const [form, setForm] = useState(initial)
    const [formError, setFormError] = useState(null)
    const [firstNameError, setFirstNameError] = useState(null)
    const [lastNameError, setLastNameError] = useState(null)
    const [usernameError, setUsernameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [password2Error, setPassword2Error] = useState(null)
const {loading, error, authenticated} = props;

const {first_name,
    last_name,
username,
email,
password1,
password2
} = form;

useEffect(() => {
   
    return () => {
        setFormError(null)
        setUsernameError(null)
        setEmailError(null)
        setFirstNameError(null)
        setLastNameError(null)
        setPasswordError(null)
        setPassword2Error(null)
        
    }
}, [])



if(authenticated){
    return <Redirect to="/" />
}


const onChange = e =>{
const {name, value} = e.target;
setForm({...form, [name]: value})
setFormError(null)
setUsernameError(null)
setEmailError(null)
setFirstNameError(null)
setLastNameError(null)
setPasswordError(null)
setPassword2Error(null)

    
}



const onSubmit = e=>{
    e.preventDefault();

    if(username !== ""&& email !== ""&& password1 !== ""&& password2 !== ""&& first_name!== ""&& last_name!==""){
        
        if(password1 !== password2){
            setPassword2Error("Your passwords do not match")
        }
        
        else{
            if(password1.length >= 5 && password2.length >= 5){
                switch (true) {
                    case error:
                        return error;
    
                    default:
                        props.signup(first_name, last_name, username, email, password1,password2);
                        break;
                }
               
     
            }
            else{
                setPassword2Error("Your password must be a minimum of 5 characters")
            }
     
        }
    }
    else{
        if(username === ""&& email === ""&& password1 === ""&& password2 === "" && first_name==="" && last_name===""){
            setFormError("Please fill all fields")
        }
         if(username === ""){
            setUsernameError("Please Enter Your username")

        }
        if(email === ""){
            setEmailError("Please Enter Your Email")

        }
        if(first_name === ""){
            setFirstNameError("Please Enter Your First Name")

        }
        if(last_name === ""){
            setLastNameError("Please Enter Your Last Name")

        }

        if(password1 === ""){
            setPasswordError("Please Enter Your password")

        }
        if(password2 === ""){
            setPassword2Error("Please enter confirm password")

        }
        

    }


}


    return (
       <Loginpage>
       <LoginContainer>
       <Logintitle>
           <Loginh2>Create Account</Loginh2>
       </Logintitle>
       {error && <Formmessage><p>{error}</p></Formmessage>}
       {formError && <Formmessage><p>{formError}</p></Formmessage>}
      
       <Loginform onSubmit={onSubmit}>
       
       <Label>
       <LabelName>
           First Name
       </LabelName>
        <Logininput name="first_name" value={first_name} onChange={onChange} type="text" placeholder="First Name"/>
      
        {firstNameError && <Formmessage><p>{firstNameError}</p></Formmessage>}
        </Label>
       <Label> 
       <LabelName>
           Last Name
       </LabelName>
       <Logininput  name="last_name" value={last_name} onChange={onChange} type="text" placeholder="Last Name"/> 
       {lastNameError && <Formmessage><p>{lastNameError}</p></Formmessage>}
       </Label> 
       <Label>
       <LabelName>
           Username
       </LabelName>
        <Logininput  name="username" value={username} onChange={onChange} type="text" placeholder="Username"/> 
        {usernameError && <Formmessage><p>{usernameError}</p></Formmessage>}
        </Label>
       <Label>
       <LabelName>
          Email
       </LabelName>
        <Logininput  name="email" value={email} onChange={onChange} type="email" placeholder="Email"/> 
        {emailError && <Formmessage><p>{emailError}</p></Formmessage>}
        </Label>
       <Label>
       <LabelName>
           Password
       </LabelName>
        <Logininput   onChange={onChange} type="password" name="password1" value={password1} placeholder="Password"/> 
        
        {passwordError && <Formmessage><p>{passwordError}</p></Formmessage>}
        </Label>
        <Label>
        <LabelName>
          Confirm Password
       </LabelName>
        <Logininput  onChange={onChange} type="password" name="password2" value={password2} placeholder="Confirm Password"/> 
        {password2Error && <Formmessage><p>{password2Error}</p></Formmessage>}
         </Label>

       <Loginbutton type="submit"> {loading ? <Loading />:  "Create Account"}</Loginbutton>
       </Loginform>
       <Loginsignup>

           <Loginh3> Already have an account? <Link to='/login'> Login</Link></Loginh3>
       </Loginsignup>

       </LoginContainer>
       <Banner/>
       <Bonus/>

       </Loginpage>
    )
}
const Loginpage = styled.div`
width: 100%;
min-height: 600px;
`

const Formmessage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 400px;
padding: 10px;
min-height: 10px;
transition:0.3s ease-in;
text-align: center;
margin: 8px auto;
color:  ${themes.red};
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
margin: 8px 0;
width: 100%;
height: 30px;
`
const Loginh3 = styled(P)`
color: ${themes.grey};
font-family: "Inter", sans-serif;
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

const mapStateToProps= state =>{
    return{
        loading: state.auth.loading,
        error: state.auth.error,
        authenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        signup: (first_name, last_name, username, email, password1,password2)=> 
        dispatch(signup(first_name, last_name, username, email, password1,password2))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

