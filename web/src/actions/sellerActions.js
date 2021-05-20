import axios from 'axios'

export const addProduct=product=>dispatch=>{
    return new Promise((resolve,reject)=>{
        axios.post("http://localhost:5000/api/products/add",product).then((res)=>{
            console.log('get products')
            console.log(product)
            dispatch({type:'ADD_PRODUCT',payload:product})
            console.log(product);
            resolve("product added")
        }).catch((err)=>{
            console.log(err)
            reject(err)
        })
    })
}
export const ProductWantTOUpdate=(product)=>(dispatch)=>{
    // return new Promise((resolve,reject)=>{
        dispatch({type:'PRODUCT_WANT_TO_UPDATE',payload:product});
    //     resolve("ProductWantTOUpdate reducer")
    // })
}
export const deleteProduct=(productId)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(`http://localhost:5000/api/products/${productId}`).then((res)=>{
            dispatch({type :'DELETE_PRODUCT',type:res.data})
            console.log(res.data);
            resolve("product deleted")
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}
export const updateStateRed=()=>(dispatch)=>{
    dispatch({type:'UPDATE_STATE',payload:null})
}
export const updateProduct=(product,id)=>dispatch=>{
    return new Promise((resolve,reject)=>{
        console.log(product,id)
        axios.patch(`http://localhost:5000/api/products/update/${id}`,product).then((res)=>{//product include _id but not  include in product module
            dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})
            console.log(res.data)
            resolve("update product")
        }).catch((err)=>{
            console.log(err)
            reject(err)
        })
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