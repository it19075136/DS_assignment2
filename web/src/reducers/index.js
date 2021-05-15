import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import usersReducer from './usersReducer'
import deliveryReducer from './deliveryReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer'

export default combineReducers({
    users: usersReducer,
    orders:orderReducer,
    delivery:deliveryReducer,
    cart: cartReducer,
    products: productReducer
    
})

  

