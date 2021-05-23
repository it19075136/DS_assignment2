import axios from 'axios'

export const addOrder = (cartItems, id, TotalAmount) => dispatch => {
    return new Promise((resolve, reject) => {
        console.log('order B');
        const itemList = cartItems.map(cartItem => { return { itemId: cartItem.product, itemName: cartItem.name, itemcolor: '', qty: Number(cartItem.qty), amount: cartItem.price, imgUrl: cartItem.imageUrl,sellerId:cartItem.sellerId } });
        let order = {
            item: [...itemList],
            userId: id,
            TotalAmount: TotalAmount,
            date: new Date(),
            status: 'payment not done'
        }
        axios.post('http://localhost:5000/api/order/add', order).then((res) => {
            console.log('order added');
            console.log(order)
            console.log(res.data)
            dispatch({ type: 'ADD_ORDER', payload: order })
            dispatch({ type: 'GET_All_ORDERS', payload: order })
            resolve("order added")
            // const itemLists = cartItems.map(cartItem => { return { itemId: cartItem.product, countInStock: Number(cartItem.countInStock) - Number(cartItem.qty) } });
            // for (let index = 0; index < itemLists.length; index++) {
            //     const Item = itemList[index];
            //     axios.post(`http://localhost:5000/api/products/updateCountInStock/${Item.itemId}`,Item).then((res)=>{//product include _id but not  include in product module
            //         dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})
            //         console.log(res.data)
            //         resolve("update product")
            //     }).catch((err)=>{
            //         console.log(err)
            //     });S
            // }
            //    let  count = 0;
            //     while (count<itemLists.length) {
            //         console.log(itemLists.length)
            //         const Item = itemLists[count];
            // axios.post(`http://localhost:5000/api/products/updateCountInStock`, itemLists).then((res) => {//product include _id but not  include in product module
            //     // dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})
            //     console.log(res.data)
            //     // if(count == itemLists.length-1){
            //     //     resolve("update product")
            //     // }
            // }).catch((err) => {
            //     console.log(err)
            // });
            //     count+=1;
            //     console.log(count)
            // }

        }).catch(err => {
            console.log(err)
            reject(err)
        });
    })
}
export const getOrder = (userid) => dispatch => {
    if (userid) {
        axios.get(`http://localhost:5000/api/order/${userid}`).then((res) => {
            console.log('order added');
            console.log(res.data)
            dispatch({ type: 'GET_ORDER', payload: res.data })
        }).catch(err => {
            console.log(err)
        });
    }
    else
        dispatch({ type: 'GET_ORDER', payload: null });
}
export const getAllOrders = (userid) => dispatch => {
    console.log(userid)
    return new Promise((resolve, reject) => {
    if (userid) {
        axios.get(`http://localhost:5000/api/order`).then((res) => {
            console.log('order added');
            console.log(res.data)
            dispatch({ type: 'GET_All_ORDERS', payload: res.data })
            resolve(res.data)
        }).catch(err => {
            console.log(err)
            reject(err)
        });
    }
    else
        dispatch({ type: 'GET_ORDER', payload: null });
})
}