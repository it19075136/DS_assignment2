import './ProductPage.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Component } from 'react'
import {connect} from 'react-redux';

//Actions
import { addToCart } from '../actions/cartActions'


class ProductPage extends Component {


    
    // const dispatch = useDispatch();
    state = {
        qty: 0,
    }

    // useEffect(() => {
    //     if(product && match.params.id !== product._id){
    //         dispatch(getProductDetails(match.params.id))
    //     }
    // },[dispatch, product, match]);

    // countHandler = (e) =>{
        
    // }

    render(){
        
        const {product, loading, error} = this.props.products;
        let {cartItems} = this.props.cart;

    //    const addToCartHandler = () => {
    //        dispatch(addToCart(product._id));
    //        history.pushState("/cart")
    //    }
        
        const addItemToCart = (id) => {
            console.log(id);
            if(this.state.qty <= product.countInStock && this.state.qty > 0){
                this.props.addToCart(id,this.state.qty).then((res)=>{
                    let {cartItems} = this.props.cart;
                    console.log(cartItems, res);
                    localStorage.setItem('cart', JSON.stringify(cartItems));
                    alert("Product added successfully!");
                    window.location.href = "/cart";  
                })

            }
            else
                alert("Quantity is higher than the available stock,Please enter a valid quantity");
        }

        const handleChange = (e) => {
            this.setState({
                qty: e.target.value
            })
            console.log(this.state);
        }
       
        return (
            <div className="productpage">
                {loading ? <h2> loading...</h2> : error ? <h2>{error}</h2> : (
                    <>
                        <div className="productpage__left">
                    <div className="left__image">
                        <img src={product.imageUrl} alt={product.itemName} />
                    </div>
                    <div className="left__info">
                            <p>Name: {product.itemName}</p>
                            <p>Price: LKR{product.price}</p>
                            <p>Description: {product.description}</p>
                    </div>
                </div>
                <div className="productpage__right">
                    <div className="right__info">
                        <p>
                            Price: <span>LKR{product.price}</span>
                        </p>
                        <p>
                            Status: <span>{product.countInStock > 0 ? "In stock" : "Out of Stock"}</span>
                        </p>
                        <p>
                            Qty
                            <input type="number" name="qty" onChange={handleChange}/>
                            <span id="err"></span>
                        </p>
                        <p>
                            <button type="button" onClick={()=>addItemToCart(product._id)}>Add To Cart</button>
                        </p>
                    </div>
                </div>
                    </>
                )}
                
            </div>
        )
    }
   
}

const mapsStatetoprops = states => ({
    products: states.products,
    cart: states.cart
})
export default connect(mapsStatetoprops, {addToCart}) (ProductPage)
