import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id , qty) => (dispatch, getState) => {
    const {data} = axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {

        if(res == 200){
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {    
                    product: data._id,
                    name: data.name,
                    imageUrl: data.imageUrl,
                    price:data.price,
                    countInStock: data.countInstock,
                    qty    
                }
            })
            
            localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
        }
    }).catch(err => {
        console.log(err);
    })
};


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}