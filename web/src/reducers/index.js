import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import usersReducer from './usersReducer'

export default combineReducers({
    users: usersReducer,
    orders:orderReducer
    // add other reducers
})



