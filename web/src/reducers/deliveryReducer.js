let initstate = {
    delivery : {},
}

export default function (state= initstate, action){
    switch(action.type) {
        case "ADD_DELIVERY":
            return {
                ...state,
                delivery : [ action.payload, ...state.delivery ]
            }
        case "DELETE_DELIVERY":
            return {
                ...state
                // deleteDelivery : [action.payload, ...state.deleteDelivery]
            }    
         default:
             return state;   
    }
}

