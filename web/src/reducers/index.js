import { combineReducers } from 'redux';
import usersReducer from './usersReducer'

export default combineReducers({
    users: usersReducer
    // add other reducers
})



