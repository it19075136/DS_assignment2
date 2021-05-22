import CartItem from '../components/CartItem'
import './CartPage.css'
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderActions'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/cartActions'
import { addToCart } from '../actions/cartActions'
import { updatCountInStock } from '../actions/sellerActions'
const CartPage = (props) => {
    const {profile} = props.users;

    const handleSubmit=()=>{
        if(profile.id){
            console.log(profile);
            props.addOrder(cartItems,profile.id,getCartSubTotal()).then((res)=>{
                console.log('order added');
                window.location.href="/delivery/payment"
                // window.location.href="/delivery/payment"
            //     const itemList= cartItems.map(cartItem=>{return {itemId:cartItem.product,countInStock:Number(cartItem.countInStock)-Number(cartItem.qty)}});
            // // console.log(itemList[0])
            // console.log(itemList)
            //     props.updatCountInStock(itemList[0]).then((res)=>{
            //         console.log(res)
            //     }).catch((err)=>{
            //         console.log(err)
            //     })
            }).catch((err)=>{
                console.log(err)
            })
            
            // itemList.forEach(item => {
            //     props.updatCountInStock(item)
            // }).then((res)=>{
            //     console.log(res)
            // }).catch((err)=>{
            //     console.log(err)
            // })
            // for (let index = 0; index < itemList.length; index++) {
                // console.log(itemList[index])
               
                
            // }
            // itemList.forEach(item => {
                
            // })
            //   window.location.href="/delivery/payment"
        }
        else{
            alert("Please login in order to proceed!");
            window.location.href="/user/login"
        }   
    
    }
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }
    return (
        <div className="cartpage">
            <div className="cartpage__left">
                <h2>Shopping Cart</h2> 
                {cartItems.length === 0 ? (
                    <div>
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
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>LKR {getCartSubTotal().toFixed(2)}</p>
                </div>
                <div className="btn__checkout">
                    {/* <button onClick={handleSubmit}>Proceed To Checkout</button> */}
                    <button onClick={handleSubmit} hidden={cartItems.length === 0}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}
// const mapStateToProps=(state)=>{
//     return{
//         Items:state.cart.cartItems
//     }
// }


// export default connect(null,{addOrder}) (CartPage)
const mapsStatetoprops = state => ({
    cart: state.cart,
    users: state.users
})
export default connect(mapsStatetoprops, {addToCart, removeFromCart, addOrder,updatCountInStock}) (CartPage)
