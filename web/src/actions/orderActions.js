import axios from 'axios'

export const addOrder=(order)=>dispatch => {
    axios.post('http://localhost:5000/api/order/add',order).then((res)=>{
        console.log('order added');
        dispatch({type:'ADD_ORDER',payload:order})//problem
    }).catch(err=>{
        console.log(err)
    });
}
export const getOrder=(userid)=>dispatch => {
    axios.get('http://localhost:5000/api/order/'+{userid}).then((res)=>{//problem
        console.log('order added');
        console.log(res.body)
        dispatch({type:'GET_ORDER',payload:res.body})//problem
    }).catch(err=>{
        console.log(err)
    });
}