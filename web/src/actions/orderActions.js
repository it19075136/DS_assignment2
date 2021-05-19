import axios from 'axios'

export const addOrder=(cartItems,id)=>dispatch => {
    console.log('order B');
    let order  = {
        orderId:'',
        userId:id,
        TotalAmount:0,
        date:'',
        item:[...cartItems]
    }
    axios.post('http://localhost:5000/api/order/add',order).then((res)=>{
        console.log('order added');
        dispatch({type:'ADD_ORDER',payload:order})
    }).catch(err=>{
        console.log(err)
    });
}
export const getOrder=(userid)=>dispatch => {
    if(userid){
    axios.get(`http://localhost:5000/api/order/${userid}`).then((res)=>{
        console.log('order added');
        console.log(res.data)
        dispatch({type:'GET_ORDER',payload:res.data})
    }).catch(err=>{
        console.log(err)
    });
    }
    else
        dispatch({type:'GET_ORDER',payload:null});
}