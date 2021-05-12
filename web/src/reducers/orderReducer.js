let initialState={
    orders:[{orderId:'O01',userId:'U01',item:[{itemId:'I01',itemName:'car',itemcolor:'blue',qty:2,amount:5000,imgUrl:''},{itemId:'I02',itemName:'van',itemcolor:'red',qty:3,amount:3000,imgUrl:''}],TotalAmount:19000,date:''}]
   
}
// {"orderId":"O01","userId":"U01","item":[{"itemId":"I01","itemName":"car","itemcolor":"blue","qty":2,"amount":5000},{"itemId":"I02","itemName":"van","itemcolor":"red","qty":3,"amount":3000}],"TotalAmount":19000,"date":""}

export default function(state=initialState,action){
    switch(action.type){
        case 'ADD_ORDER':
            return({
                ...state,
                orders:[action.payload,...state.orders]
            })
        case 'GET_ORDER':
            return({
                ...state,
                orders:action.payload
            })
        default:
            return state;
    }
}
// let initstate = {
//     orders:[{orderId:'O01',userId:'U01',item:[{itemId:'I01',itemName:'car',itemcolor:'blue',qty:2,amount:5000,imgUrl:''},{itemId:'I02',itemName:'van',itemcolor:'red',qty:3,amount:3000,imgUrl:''}],TotalAmount:19000,date:''}]

// }

// export default function(state = initstate,action) {
//     switch (action.type) {
//         case "ADD_ORDER":
//             return ({
//                 ...state,
//                 orders:[action.payload, ...state.orders]
//             })
//         default:
//             return state;
//     }
// }