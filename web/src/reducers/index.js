import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import usersReducer from './usersReducer'
import deliveryReducer from './deliveryReducer';

export default combineReducers({
    users: usersReducer,
    orders:orderReducer,
    delivery:deliveryReducer
    
})



