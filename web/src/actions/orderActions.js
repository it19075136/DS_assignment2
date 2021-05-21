import axios from 'axios'

export const addOrder=(cartItems,id,TotalAmount)=>dispatch => {
    return new Promise((resolve,reject)=>{
        console.log('order B');
        let order  = {
            userId:id,
            TotalAmount:TotalAmount,
            item: [],
            date:new Date(),
            status:'payment not done'
            // item:[cartItems ? cartItems.map()],
            // item:[...cartItems],
        }
        axios.post('http://localhost:5000/api/order/add',order).then((res)=>{
            console.log('order added');
            dispatch({type:'ADD_ORDER',payload:order})
            resolve("done");
        }).catch(err=>{
            console.log(err)
            reject(err)
        });
    })
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