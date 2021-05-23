import axios from 'axios'

export const addProduct=product=>dispatch=>{
    return new Promise((resolve,reject)=>{
        axios.post("http://localhost:5000/api/products/add",product).then((res)=>{
            console.log('get products')
            console.log(product)
            dispatch({type:'ADD_PRODUCT',payload:res.data})//updating reducx  store
            console.log(product);
            resolve("product added")
        }).catch((err)=>{
            console.log(err)
            reject(err)
        })
    })
}

export const ProductWantTOUpdate=(product)=>(dispatch)=>{
        console.log("updating product id", product._id);
        dispatch({type:'PRODUCT_WANT_TO_UPDATE',payload:product});//updating reducx  store
}
export const deleteProduct=(productId)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(`http://localhost:5000/api/products/${productId}`).then((res)=>{
            dispatch({type :'DELETE_PRODUCT',type:res.data})//updating reducx  store
            console.log(res.data);
            resolve("product deleted")
        }).catch((err)=>{
            console.log(err);
            reject(err)
        })
    })
}
export const updateStateRed=()=>(dispatch)=>{
    dispatch({type:'UPDATE_STATE',payload:null})//updating reducx  store
}
export const updateProduct=(product,id)=>dispatch=>{
    return new Promise((resolve,reject)=>{
        console.log(product,id)
        axios.post(`http://localhost:5000/api/products/update/${id}`,product).then((res)=>{//product include _id but not  include in product module
            dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})//updating reducx  store
            console.log(res.data)
            resolve("update product")
        }).catch((err)=>{
            console.log(err)
            reject(err)
        })
    })
}
export const updatCountInStock=item=>dispatch=>{
    return new Promise((resolve,reject)=>{
        // items.forEach(item => {
        axios.post(`http://localhost:5000/api/products/updateCountInStock/${item.itemId}`,item.countInStock).then((res)=>{
            // console.log('get products')
            console.log("qua updated product added")
            // dispatch({type:'SELLER_UPDATE_PRODUCT',payload:product})
            resolve("product update product added")
            console.log(res);
        }).catch((err)=>{
            console.log(err)
            reject(err)
            
        })
    // });
    
    })
}