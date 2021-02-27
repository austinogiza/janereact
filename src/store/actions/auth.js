import axios from 'axios'
import { loginURL,signURL } from '../../constants'
import * as actionTypes from './actionTypes'

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }

}

export const authFail = error =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error: error,

    }
}

export const logout = () =>{

    localStorage.removeItem('janesFashionToken');
    localStorage.removeItem('_hjid');
    localStorage.removeItem('janesFashionExpirationDate');

    return{
        type: actionTypes.AUTH_LOGOUT
    }
}


export const checkAuthTimeOut = expirationTime =>{
    return dispatch =>{
    setTimeout(()=>{dispatch(logout());
}, expirationTime + 7 * 24 * 60 * 60 * 1000 )
    }
}


export const authLogin = (email, password) =>{
    return dispatch=> {
        dispatch(authStart());
        axios.post(loginURL, {
            email,
            password
        }).then(res=>{
            const token = res.data.key;
    
            const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); 
     
            localStorage.setItem('janesFashionToken', token);
            localStorage.setItem("janesFashionExpirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600*1000));
        
        }).catch(err=>{
            dispatch(authFail(err.response.data.non_field_errors))
         

           
        })
    }
}

export const authSignup = (first_name, last_name, username, email, password1, password2)=>{
    return dispatch=> {
        dispatch(authStart());
        axios.post(signURL, {
            first_name, 
            last_name, 
            username, 
            email, 
            password1,
            password2, 
        }).then(res=>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); 
            localStorage.setItem('janesFashionToken', token);
            localStorage.setItem("janesFashionExpirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
         
        }).catch(err=>{
            console.log((err.response.data.email))
            console.log((err.response.data.username))
            dispatch(authFail((err.response.data.email) || (err.response.data.username)))
         
        })
    }
}

export const authCheckState = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('janesFashionToken');
        if (token === undefined){
            dispatch(logout());
        }
        else{
            const expirationDate = new Date(localStorage.getItem("janesFashionExpirationDate"));
if (expirationDate <= new Date()){
    dispatch(logout());
}
else{
    dispatch(authSuccess(token));
    dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000))

}
        }
    }
}