let initialState={
    orders:[{item:[{itemId:'I01',itemName:'car',itemcolor:'blue',qty:2,amount:5000,imgUrl:''},{itemId:'I02',itemName:'van',itemcolor:'red',qty:3,amount:3000,imgUrl:''}],userId:'U02',TotalAmount:19000,date:'',status:'payment Pending'},
    {item:[{itemId:'I01',itemName:'car',itemcolor:'blue',qty:2,amount:5000,imgUrl:''},{itemId:'I02',itemName:'van',itemcolor:'red',qty:3,amount:3000,imgUrl:''}],userId:'U02',TotalAmount:19000,date:''}]
   
}
export default function(state=initialState,action){
    console.log('in in in')
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