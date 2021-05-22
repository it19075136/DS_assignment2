import CartItem from '../components/CartItem'
import './CartPage.css'
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderActions'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/cartActions'
import { addToCart } from '../actions/cartActions'
const CartPage = (props) => {
    
    const {profile} = props.users;


    const handleSubmit=()=>{
        if(profile.id){
            console.log(profile);
            props.addOrder(cartItems,profile.id,getCartSubTotal()).then((res)=>{
                console.log('order added');
                // window.location.href="/delivery/payment"
            }).catch((err)=>{
                console.log(err)
            })
        }
        else{
            alert("Please login in order to proceed!");
            window.location.href="/user/login"
        }       
    }


    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    //Get all qty count
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    //Get sub total amount
    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }


    return (
        <div className="cartpage">
            <div className="cartpage__left">
                <h2>Shopping Cart</h2> 
                {/* Reusable cart items */}
                {cartItems.length === 0 ? (
                    <div>   
                        {/* If the cart is empty this will appear  */}
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <CartItem
                        item={item}
                        removeFromCart = {props.removeFromCart}/>
                    ))
                )}
            </div>
            <div className="cartpage__right">
                <div className="cartpage__info">
                    {/* Get Item count  */}
                    <p>Subtotal ({getCartCount()}) items</p>
                    {/* Get Sub Total it fixed to two decimal places */}
                    <p>LKR {getCartSubTotal().toFixed(2)}</p>
                </div>
                <div className="btn__checkout">
                    <button onClick={handleSubmit} hidden={cartItems.length === 0}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapsStatetoprops = state => ({
    cart: state.cart,
    users: state.users
})
export default connect(mapsStatetoprops, {addToCart, removeFromCart, addOrder}) (CartPage)
