import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Bonus from '../components/Bonus'
import { submitButton } from '../styles/Button'
import Loading from '../components/Loading'
import { themes } from '../styles/ColorStyles'
import { formInput } from '../styles/InputStyles'
import {H2,P } from '../styles/TextStyles'
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
const {loading, error, authenticated} = props;

const {first_name,
    last_name,
username,
email,
password1,
password2
} = form;

if(authenticated){
    return <Redirect to="/" />
}


const onChange = e =>{
const {name, value} = e.target;
setForm({...form, [name]: value})
setFormError(null)
    
}


const onSubmit = e=>{
    e.preventDefault();

    if(username !== ""&& email !== ""&& password1 !== ""&& password2 !== ""&& first_name!== ""&& last_name!==""){
        if(password1 !== password2){
            setFormError("Your passwords do not match")
        }
        
        else{
            if(password1.length >= 8 && password2.length >= 8){
                switch (true) {
                    case error:
                        return error;
                        break;
                    default:
                        props.signup(first_name, last_name, username, email, password1,password2,  );
                        break;
                }
               
     
            }
            else{
                setFormError("Your password must be a minimum of 8 characters")
            }
     
        }
    }
    else{
        if(username === ""&& email === ""&& password1 === ""&& password2 === "" && first_name==="" && last_name===""){
            setFormError("Please fill all fields")
        }
        else if(username === ""){
            setFormError("Please Enter Your username")

        }
        else if(email === ""){
            setFormError("Please Enter Your Email")

        }
        else if(first_name === ""){
            setFormError("Please Enter Your First Name")

        }
        else if(last_name === ""){
            setFormError("Please Enter Your Last Name")

        }

        else if(password1 === ""){
            setFormError("Please Enter Your password")

        }
        else if(password2 === ""){
            setFormError("Please enter confirm password")

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
       <Logininput name="first_name" value={first_name} onChange={onChange} type="text" placeholder="First Name"/>
       <Logininput name="last_name" value={last_name} onChange={onChange} type="text" placeholder="Last Name"/>
       <Logininput name="username" value={username} onChange={onChange} type="text" placeholder="Username"/>
       <Logininput name="email" value={email} onChange={onChange} type="email" placeholder="Email"/>
       <Logininput onChange={onChange} type="password" name="password1" value={password1} placeholder="Password"/>
       <Logininput onChange={onChange} type="password" name="password2" value={password2} placeholder="Confirm Password"/>

       <Loginbutton> {loading ? <Loading />:  "Create Account"}</Loginbutton>
       </Loginform>
       <Loginsignup>

           <Loginh3> Are you a member? <Link to='/login'> Login</Link></Loginh3>
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
background: ${themes.jane};
height: 54px;
text-align: center;
margin: 24px auto;
color:  ${themes.white};
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

