const initialState={
    orders:[{orderId:'O01',userId:'U01',item:[{itemId:'I01',itemName:'car',itemcolor:'blue',qty:2,amount:5000},{itemId:'I02',itemName:'van',itemcolor:'red',qty:3,amount:3000}],TotalAmount:19000,date:''}]
}
// {"orderId":"O01","userId":"U01","item":[{"itemId":"I01","itemName":"car","itemcolor":"blue","qty":2,"amount":5000},{"itemId":"I02","itemName":"van","itemcolor":"red","qty":3,"amount":3000}],"TotalAmount":19000,"date":""}

export default function(state=initialState,action){
    switch(action.type){
        case 'ADD_ORDER':
            return({
                ...state,
                orders:[action.payload,...state.order]
            })
    }
}