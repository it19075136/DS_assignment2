import axios from 'axios'

export const addProduct=product=>dispatch=>{
    axios.post("http://localhost:5000/api/products/add",product).then((res)=>{
        console.log('get products')
        console.log(product)
        dispatch({type:'ADD_PRODUCT',payload:product})
        console.log(product);
    }).catch((err)=>{
        console.log(err)
    })
}
export const ProductWantTOUpdate=(product)=>(dispatch)=>{
    dispatch({type:'PRODUCT_WANT_TO_UPDATE',payload:product});
}
export const deleteProduct=(productId)=>(dispatch)=>{
    axios.delete(`http://localhost:5000/api/products/${productId}`).then((res)=>{
        dispatch({type :'DELETE_PRODUCT',type:res.data})
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}
export const updateStateRed=()=>(dispatch)=>{
    dispatch({type:'UPDATE_STATE',payload:null})
}
export const updateProduct=(product,id)=>dispatch=>{
    console.log(product,id)
    axios.put(`http://localhost:5000/api/products/update/${id}`,product).then((res)=>{//product include _id but not  include in product module
        dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}
// export const addUser = user => dispatch => {
//     axios.post('http://localhost:5000/api/users',user).then((res)=>{
//         const {token} = res.data;
//         localStorage.setItem('jwtToken',token);
//         setAuthorizationToken(token);
//         dispatch({
//             type: "ADD_USER",
//             payload: user,
//             currentUser: jwt.decode(token)
//         })
//     }).catch(err=>{
//         console.log(err);
//     });
// }