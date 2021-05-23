import './SideDrawer.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOut } from '../actions/userActions'
import {getOrder,getAllOrders } from '../actions/orderActions'
import {useSelector} from 'react-redux'

const SideDrawer = (props) => {

    const sideDrawerClass = ["sidedrawer"];

    const {show,click} = props;
    let {profile} = props.users;

    const handleLogout = () => {
        props.logOut();
    }

    if(show){
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart" hidden={profile.type =="Seller"}>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
               {profile.id ? (<ul className="sidedrawer__links" onClick={click}>
               <li><Link  to="/sellerOrders" hidden={profile.type =="Buyer"}>Seller Orders</Link></li>
                <li><Link to="/orders" hidden={profile.type =="Seller"}>orders</Link></li>
                {profile.type === "Buyer" ? (null) :( <li><Link to="/delivery/list">delivery</Link></li>) }
                    <li><Link to="/user/profile">My Profile</Link></li>
<li><Link onClick={handleLogout}>Log out</Link></li>
</ul>):
                        (<ul className="sidedrawer__links" onClick={click}>
                            <li>
                                <Link to="/user/login">Login</Link> 
                            </li>
                            <li>
                                <Link to="/user/registration">Sign Up</Link>
                            </li>
                        </ul>)
                        }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ logOut,getOrder,getAllOrders  })(SideDrawer)
