import './SideDrawer.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOut } from '../actions/userActions'

const SideDrawer = (props) => {

    const sideDrawerClass = ["sidedrawer"];

    const {show,click} = props;
    let {profile} = props.users;

    console.log(profile);

    const handleLogout = () => {
        console.log("Logging out");
        props.logOut();
    }

    if(show){
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cartbadge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
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
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ logOut })(SideDrawer)
