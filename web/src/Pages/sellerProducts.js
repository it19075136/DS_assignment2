import { useParams } from 'react-router'
import Product from '../components/Product'
import './HomePage.css'
import { connect } from 'react-redux'


const sellerProducts = (props) => {
    const {} = useParams();
    const user =  props.user;

    const sellerProductsList = 

    return (
        <div className="homepage">
            <h2 className="homepage__title">Latest Product</h2>
            <div className="homepage__products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>        
        </div>
    )
}
const mapStateToProps=(state)=>{
return{
    user:state.users.profile
}
}

export default connect(mapStateToProps,) (sellerProducts)
