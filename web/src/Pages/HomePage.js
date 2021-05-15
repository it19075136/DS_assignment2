import Product from '../components/Product'
import './HomePage.css';
import { useEffect, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';

//Actions
import { getProducts} from '../actions/productActions';

class HomePage extends Component {

    // const dispatch = useDispatch();
    
    // const getProducts = useSelector((state) => state.products);
   
    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])
    componentDidMount(){
        this.props.getProducts();
    }
 render(){
    // console.log("test")
    // this.props.getProducts();
    const { products, loading, error } = this.props.products;
    console.log(products);
    return (
        <div className="homepage">
            <h2 className="homepage__title">Latest Product</h2>
            <div className="homepage__products">
                {loading ? <h2> Loading...</h2> : error ? <h2> {error} </h2> : products.map((product) => (
                    <Product 
                    key={product._id}
                    productId={product._id} 
                    name={product.itemName}
                    price={product.price}
                    date={product.date}
                    description={product.description}
                    imageUrl={product.imageUrl}/>
                ))}
            </div>
        </div>
    )
            }
}

const mapsStatetoprops = state => ({
    products: state.products
})
export default connect(mapsStatetoprops, {getProducts}) (HomePage)
