import React from 'react'
import axios from 'axios'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from './actionTypes'

export const signUp = (userData) => (dispatch) => {

    dispatch({type: SIGNUP_REQUEST})
    
    axios.post('https://gifted-erin-bat.cyclic.app/register', userData)
    .then((res)=>{
        console.log(res);
        dispatch({type: SIGNUP_SUCCESS})
    })
    
    .catch((err)=>{
        console.log(err);
        dispatch({type: SIGNUP_FAILURE})
    })

}

export const login = (userData) => (dispatch) => {

    dispatch({type: LOGIN_REQUEST})

    axios.post('https://gifted-erin-bat.cyclic.app/login', userData)
    .then((res)=>{
        console.log(res);
        dispatch({type: LOGIN_SUCCESS, payload: res.data.token})
        localStorage.setItem('token', res.data.token)
        console.log(res.data.token);
    })

    .catch((err)=>{
        console.log(err);
        dispatch({type: LOGIN_FAILURE})
    })

}