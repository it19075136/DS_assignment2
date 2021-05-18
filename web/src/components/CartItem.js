import './CartItem.css'
import {Link} from 'react-router-dom'


const CartItem = ({item , qtyChangeHandler, removeFromCart}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.itemName}/>
            </div>

            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.itemName}</p>
            </Link>

            <p className="cartitem__price">LKR{item.price}</p>

            <select className="cartitem__select" value={item.qty}>
                {[Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button className="cartitem__deleteBtn" onClick={()=>removeFromCart(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
