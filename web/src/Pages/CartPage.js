import CartItem from '../components/CartItem'
import './CartPage.css'
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderActions'

const CartPage = (props) => {
    const handleSubmit=()=>{
        props.addOrder();
    }
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
                    <button onClick={handleSubmit}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default connect(null,{addOrder}) (CartPage)
