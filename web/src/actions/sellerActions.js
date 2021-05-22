import axios from 'axios'

export const addProduct=product=>dispatch=>{
    return new Promise((resolve,reject)=>{
        axios.post("http://192.168.8.183:8280/products/add",product).then((res)=>{
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
        console.log("updating product id", product._id);
        dispatch({type:'PRODUCT_WANT_TO_UPDATE',payload:product});

}

export const deleteProduct=(productId)=>(dispatch)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(`http://192.168.8.183:8280/products/${productId}`).then((res)=>{
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
        axios.post(`http://192.168.8.183:8280/products/update/${id}`,product).then((res)=>{//product include _id but not  include in product module
            dispatch({type:"SELLER_UPDATE_PRODUCT",payload:res.data})
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
        axios.post(`http://192.168.8.183:8280/products/updateCountInStock/${item.itemId}`,item.countInStock).then((res)=>{
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