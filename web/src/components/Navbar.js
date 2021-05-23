import './Navbar.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { getOrder,getAllOrders } from '../actions/orderActions';
import { logOut,getUserById } from '../actions/userActions'
import {useSelector} from 'react-redux'

const Navbar = (props) => {
    const {click} = props;
    let {profile} = props.users;
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    const handleLogout = () => {
        props.logOut();
    }

    const handleProfile = () => {
        props.getUserById(profile.id);
    }
    const handleSubmit=()=>{
        props.getOrder(profile.id);
    }
    const handleSellerOrders=()=>{
        props.getAllOrders(profile.id).then((res)=>{
            window.location.href="/sellerOrders"
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>SHOPPING LANKA</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link" hidden={profile.type !="Buyer"}>
                        <i className="fas fa-shopping-cart"></i>
                        <span> 
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/" hidden={profile.type !="Buyer"}>
                        Shop
                    </Link>
                </li>
                        {profile.id ? ( 
                        <ul className="navbar__links">
                        <li><Link to="/orders" onClick={handleSubmit} hidden={profile.type !="Buyer"}>orders</Link></li>
                        
                        <li><Link to="/user/profile" onClick={handleProfile}>My Profile</Link></li>
                        <li><Link  onClick={handleSellerOrders} hidden={profile.type =="Buyer"}>Seller Orders</Link></li>
                        <li><Link onClick={handleLogout}>Log out</Link></li>
                        </ul>):
                        (<ul className="navbar__links">
                            <li>
                                <Link to="/user/login">Login</Link> 
                            </li>
                            <li>
                                <Link to="/user/registration">Sign Up</Link>
                            </li>
                        </ul>)
                        }
            </ul>
            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav> 
    )
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ logOut,getUserById,getOrder,getAllOrders })(Navbar)

