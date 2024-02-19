import React from 'react'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes'

const initialState = {
    isAuth: false,
    isError: false,
    isLoading: false,
    token: ''
}

export const reducer = (state = initialState, action ) => {
    const {type, payload} = action
    
    switch (type) {

        case LOGIN_REQUEST: {
            return {...state, isLoading: true}
        }

        case LOGIN_SUCCESS: {
            return {...state, isLoading:false, isAuth: true, token: payload}
        }

        case LOGIN_FAILURE: {
            return {...state, isLoading:false, isError: true }
        }

        default : return state
    }
}