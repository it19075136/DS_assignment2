import CartItem from '../components/CartItem'
import './CartPage.css'
import {connect} from 'react-redux'
import {addOrder} from '../actions/orderActions'

const CartPage = (props) => {
    const cartItems = props.cartItems;
    // state={
    //     orderId:'',
    //     userId:'',
    //     item:[itemId:'',
    //     itemName:'',
    //     itemcolor:'',
    //     qty:'',
    //     amount'',
    //     imgUrl:''],
    //     TotalAmount:'',
    //     date:''
    // }
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
const mapStateToProps=(state)=>{
    return{
        Items:state.cart.cartItems
    }
}


export default connect(null,{addOrder}) (CartPage)
