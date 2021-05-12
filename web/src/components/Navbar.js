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

const Navbar = (props) => {
    const handleSubmit=()=>{
        props.getOrder('U01');
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
            </ul>

            {/* hamburger menu */}
            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav> 
    )
}
const mapDispatchToProps =(dispatch)=>{//problem
    return{
        // createProject:(project)=>dispatch(createProject(project))
        getOrder:(userid)=>dispatch(getOrder(userid))//problem
    }
}
export default connect(null,mapDispatchToProps)(Navbar)
