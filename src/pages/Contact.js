import React, { useState } from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { H2,H3, Small } from '../styles/TextStyles'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import { submitButton } from '../styles/Button'
import axios from 'axios'
import { contact } from '../constants'
import Message from '../components/Message'
import Loading from '../components/Loading'

const Contact = () => {

   

    const initial = {
        name: "",
        email: "",
        subject: "",
        message: ""

    }

    const [form, setForm] = useState(initial);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const {
        name,
        email,
        subject,
        message
    } = form;

   const onChange = e=>{

        const {name, value} = e.target;

        setForm({...form, [name]:value})
    }
    

    const onSubmit = e =>{
e.preventDefault();
setLoading(true)
axios.post(contact, {
    name,
    email,
    subject,
    message
}).then(error=>{
    setForm(initial)
    setLoading(false)

}).catch(error=>{

    setError(error.message)
    setLoading(false)


})



    }
    return (
     <Contactbody>


<Contactheader>

    <Contactwrite>

Contact us
    </Contactwrite>
</Contactheader>

<Contactgroup>

    
<Contactleft>

<Contactbox>

<Contacth2>Address</Contacth2>
<Contactp>Efab Queens Estate, Abuja</Contactp>

</Contactbox>
<Contactbox>
<Contacth2>Phone</Contacth2>
<Contactp><a href="tel:+2348181718700">+234 818 171 8700</a></Contactp>

</Contactbox>
<Contactbox>
<Contacth2>Email</Contacth2>
<Contactp>
        <a href="mailto:support@janes-fashion.com">Support@janes-fashion.com</a></Contactp>

</Contactbox>

<Contactbox>
<Contacth2>Social</Contacth2>
<Contacticons>

<ul>

<li><a rel="noopener noreferrer" target="_blank" href="https://web.facebook.com/Janesfashionn/"><Footersocial  src={facebook} alt="Jane's Fashion Social media"/></a></li>
    
        <li><a target="_blank" href="https://www.instagram.com/janesfashionn/" rel="noopener noreferrer"  ><Footersocial  src={instagram} alt="Jane's Fashion Social media" /></a></li>
</ul>
</Contacticons>

</Contactbox>
</Contactleft>
<Contactright>
{error && <Message message={error}/>}
<Form onSubmit={onSubmit}>

<Input type="text" placeholder="Your Name" value={name} name="name" onChange={onChange}  ></Input>
<Input  placeholder="Your Email" type="email" value={email} name="email" onChange={onChange}  ></Input>
<Input placeholder="Subject" value={subject} name="subject" type="text"  onChange={onChange}  ></Input>
<Textarea placeholder="Your Message" value={message} name="message" onChange={onChange} >

</Textarea>
<Button type="submit" >Send Message {loading && <Loading/>}</Button>
</Form>
</Contactright>


</Contactgroup>
     </Contactbody>
    )
}
const Contactbody = styled.div`
min-height:1000px;
width:100%;
`
const Contactheader = styled.div`
min-height:400px;
width:100%;
background: url("https://res.cloudinary.com/jane-s-fashion/image/upload/v1606049644/1591554638714_rmyzp9.jpg") no-repeat fixed center center/cover;
display: flex;
justify-content: center;
align-items: center;

`
const Contactwrite = styled(H2)`
color: ${themes.white};
text-transform: capitalize;

`
const Contactbox = styled.div`
min-height: 50px;
width:100%;
margin: 8px 0;

a{
    color: ${themes.black};
    transition: 0.4s ease-in;

    :hover{
        color: ${themes.jane};
    }

}
`

const Contacticons = styled.div`
min-height: 50px;
width:100%;
ul{
    display: flex;
    flex-direction: row;

    li{
     width: 40px;
     height: 40px;

     margin: 10px 10px 10px 0;
     a{  width: 40px;
     height: 40px;

     }
    }

}
`
const Contacth2 = styled(H3)`
color: ${themes.black};
font-weight: 600;
margin: 8px 0;
`
const Contactp = styled(Small)`
color: ${themes.grey}
`

const Footersocial = styled.img`
width: 100%;
height: 100%;
transition: 0.3s ease-in;

:hover{
    transform: scale(1.1);
}

`

const Contactgroup = styled.div`
display: flex;
flex-direction: row;
max-width: 1200px;
margin: 40px auto;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 550px){
    flex-direction: column;
}
`

const Contactleft = styled.div`
height: 100%;
width: 100%; 

flex: 0 0 40%;
display: flex;
flex-direction: column;
-ms-flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 25px;

@media only screen and (max-width: 550px){
flex: 1;
}

`
const Contactright = styled.div`
height: 100%;
width: 100%; 
display: flex;
flex-direction: column;
-ms-flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
padding: 10px 25px;
`
const Form = styled.form`
height: 100%;
width: 100%; 
display: flex;
flex-direction: column;
-ms-flex-direction: column;
justify-content: center;
align-items: center;
`
const Input = styled.input`
height: 40px;
width: 100%; 
margin: 8px 0;
padding: 8px 12px;
outline: none;
font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;

::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`   

const Textarea = styled.textarea`
height: 300px;
width: 100%; 
margin: 8px 0;
resize: none;
padding: 8px 12px;
font-size: 14px;
outline: none;
    line-height: 1.42857143;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    ::placeholder{
        font-size: 15px;
        color: #cccccc;
        text-transform: capitalize;
}

:active,:focus,:hover{
    border: 2px solid ${themes.jane};
    outline: none;
}
`
const Button = styled(submitButton)``  

export default Contact;