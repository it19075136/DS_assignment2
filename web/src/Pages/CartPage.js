import CartItem from '../components/CartItem'
import './CartPage.css'
import {Link} from 'react-router-dom'
import { removeFromCart } from '../actions/cartActions'
import {connect} from 'react-redux';
import { addToCart } from '../actions/cartActions'

const CartPage = (props) => {
    const {cartItems} = props.cart
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
                        // qtyChangeHandler={qtyChangeHandler}
                        removeFromCart = {removeFromCart(item.id)}/>
                    ))
                )}
            </div>
            <div className="cartpage__right">
                <div className="cartpage__info">
                    <p>Subtotal (0) items</p>
                    <p>$100.88</p>
                </div>
                <div className="btn__checkout">
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapsStatetoprops = state => ({
    cart: state.cart
})
export default connect(mapsStatetoprops, {addToCart, removeFromCart}) (CartPage)
