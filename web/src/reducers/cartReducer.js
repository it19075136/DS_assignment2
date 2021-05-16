import * as actionType from '../constants/cartConstants'

let initstate = {
    cartItems: [] 
}

export default function (state = initstate, action) {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            console.log('Product added to cart')
            const item = action.payload;
            console.log(item);
            // const existItem = state.cartItems.find((x) => x.product === item.product)

            if (false) {
                return {
                    ...state,
                    // cartItems: state.cartItems.map((x) => x.product == existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionType.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        default:
            return state
    }
}