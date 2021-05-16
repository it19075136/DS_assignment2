import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id , qty) => (dispatch, getState) => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
        console.log(res.data.itemName);
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {    
                    product: res.data._id,
                    name: res.data.itemName,
                    imageUrl: res.data.imageUrl,
                    price:res.dataprice,
                    countInStock: res.data.countInstock,
                    qty    
                }
            });
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