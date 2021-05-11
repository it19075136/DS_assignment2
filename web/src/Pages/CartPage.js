import CartItem from '../components/CartItem'
import './CartPage.css'

const CartPage = () => {
    return (
        <div className="cartpage">
            <div className="cartpage__left">
                <h2>Shopping Cart</h2>
                <CartItem/>
                <CartItem/>
                <CartItem/>
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

export default CartPage
