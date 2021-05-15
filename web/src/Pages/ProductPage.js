import './ProductPage.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Component } from 'react'
import {connect} from 'react-redux';

//Actions
import { getProductDetails } from '../actions/productActions'
import { addToCart } from '../actions/cartActions'



class ProductPage extends Component {


    // const [qty, setQty] = useState(1);
    // const dispatch = useDispatch();

    

    // useEffect(() => {
    //     if(product && match.params.id !== product._id){
    //         dispatch(getProductDetails(match.params.id))
    //     }
    // },[dispatch, product, match]);

    componentDidMount(){
        this.props.getProductDetails();
    }

    // countHandler = (e) =>{
        
    // }

    render(){

        const {product, loading, error} = this.props.products;

       
       
        return (
            <div className="productpage">
                {loading ? <h2> loading...</h2> : error ? <h2>{error}</h2> : (
                    <>
                        <div className="productpage__left">
                    <div className="left__image">
                        <img src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="left__info">
                            <p>Name: {product.itemName}</p>
                            <p>Price: LKR{product.price}</p>
                            <p>Description: {product.description}</p>
                    </div>
                </div>
                <div className="productpage__right">
                    <div className="right__info">
                        <p>
                            Price: <span>LKR{product.price}</span>
                        </p>
                        <p>
                            Status: <span>{product.countInStock > 0 ? "In stock" : "Out of Stock"}</span>
                        </p>
                        <p>
                            Qty
                            <input type="number" name="qty" onChange={(product.countInStock < 10) ? (document.getElementById("err").innerHTML = "Invalid Quantity") : null}/>
                            <span id="err"></span>
                        </p>
                        <p>
                            <button type="button">Add To Cart</button>
                        </p>
                    </div>
                </div>
                    </>
                )}
                
            </div>
        )
    }
   
}

const mapsStatetoprops = state => ({
    products: state.products
})
export default connect(mapsStatetoprops, {getProductDetails}) (ProductPage)
