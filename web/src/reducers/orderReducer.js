let initialState = {
    orders: [],
    allOrders:[]

}
export default function (state = initialState, action) {
    console.log('in in in')
    switch (action.type) {
        case 'ADD_ORDER':
            return ({
                ...state,
                orders: [action.payload, ...state.orders]
            })
        case 'GET_ORDER':
            return ({
                ...state,
                orders: action.payload
            })
        case 'GET_All_ORDERS':
            return({
                ...state,
                allOrders:[...state.allOrders,...action.payload]
            })
        default:
            return state;
    }
}