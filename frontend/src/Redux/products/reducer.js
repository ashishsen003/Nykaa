import React from 'react'
import { ADD_PRODUCT, EDIT_PRODUCT, PRODUCTS_FAILURE, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from './actionTypes'

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isEdit: false,
    isAdd: false
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type){

        case PRODUCTS_REQUEST: {
            return {...state, isLoading: true}
        }

        case PRODUCTS_SUCCESS: {
            return {...state, isLoading: false, products: payload}
        }

        case PRODUCTS_FAILURE: {
            return {...state, isLoading: false, isError: true}
        }

        case EDIT_PRODUCT: {
            return {...state, isEdit: payload}
        }

        case ADD_PRODUCT: {
            return {...state, isAdd: payload}
        }

        default: return state
    }

}
