// import './Navbar.css';
// import {Link} from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar__logo">
//                 <h2>SHOPPING LANKA</h2>
//             </div>
     
//             <ul className="navbar__links">
//                 <li>
//                     <Link to="/cart" className="cart__link">
//                         <i className="fas fa-shopping-cart"></i>
//                         <span>
//                             Cart
//                             <span className="cartlogo__badge">0</span>
//                         </span>
                        
//                     </Link>
//                 </li>
//                 <li>
//                     <Link to="/">
//                         Shop
//                     </Link>
//                 </li>
//             </ul>

//             {/* hamburger menu */}
//             <div className="hamburger__menu">
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </nav> 
//     )
// }

// export default Navbar

import './Navbar.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { getOrder } from '../actions/orderActions';
import { logOut } from '../actions/userActions'

const Navbar = (props) => {
    
    const handleSubmit=()=>{
        props.getOrder('U01');
    }
    const {click} = props;
    let {profile} = props.users;
    console.log(profile);

    const handleLogout = () => {
        console.log("Logging out");
        props.logOut();
    }
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>SHOPPING LANKA</h2>
            </div>
     
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">0</span>
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/orders" onClick={handleSubmit}>
                        orders
                    </Link>
                </li>
                        {profile.firstName ? (<li><Link onClick={handleLogout}>Log out</Link></li>):
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

export default connect(mapStateToProps,{ logOut,getOrder })(Navbar)

