import * as actionType from '../constants/productConstants'
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    try{
        dispatch({type: actionType.GET_PRODUCTS_REQUEST});

        axios.get("http://localhost:5000/api/products").then((res) => {
            dispatch({
                type: actionType.GET_PRODUCTS_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })

    }catch(error){
        dispatch({
            type: actionType.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getProductDetails = (id) => (dispatch) => {
    try{
        dispatch({type: actionType.GET_PRODUCT_DETAILS_REQUEST});
        console.log(id);
        axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
        dispatch({
                type: actionType.GET_PRODUCT_DETAILS_SUCCESS,
                payload: res.data
            })
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }catch(error){
        dispatch({
            type: actionType.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionType.GET_PRODUCT_DETAILS_RESET
    })
}