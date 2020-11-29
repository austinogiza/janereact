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

    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
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


export const authLogin = (username, password) =>{
    return dispatch=> {

        dispatch(authStart());
        axios.post(loginURL, {
            username:username,
            password:password
        }).then(res=>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); 
            localStorage.setItem('token', token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));



        }).catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email, password1, password2)=>{
    return dispatch=> {

        dispatch(authStart());
        axios.post(signURL, {
            username:username,
            email:email, 
            password1:password1, 
            password2:password2
        }).then(res=>{
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000); 
            localStorage.setItem('token', token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeOut(3600));
        }).catch(err=>{
            dispatch(authFail(err))
        })
    }
}