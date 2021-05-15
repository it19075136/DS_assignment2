import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import usersReducer from './usersReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer'

export default combineReducers({
    users: usersReducer,
    // orders:orderReducer
    // add other reducers
    cart: cartReducer,
    products: productReducer
})

  

