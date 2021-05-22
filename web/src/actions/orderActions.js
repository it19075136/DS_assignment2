import axios from 'axios'

export const addOrder=(cartItems,id,TotalAmount)=>dispatch => {
    return new Promise((resolve,reject)=>{
        console.log('order B');
       const itemList= cartItems.map(cartItem=>{return {itemId:cartItem.product,itemName:cartItem.name,itemcolor:'',qty:Number(cartItem.qty),amount:cartItem.price,imgUrl:cartItem.imageUrl}});
        let order  = {
            item: [...itemList],
            userId:id,
            TotalAmount:TotalAmount,
            date:new Date(),
            status:'payment not done'
        }
        axios.post('http://localhost:5000/api/order/add',order).then((res)=>{
            console.log('order added');
            console.log(order)
            console.log(res.data)
            res.body(order)
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