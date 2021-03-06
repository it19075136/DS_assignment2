import { Link } from 'react-router-dom';
import '../components/Product'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ProductWantTOUpdate } from '../actions/sellerActions'
import { deleteProduct } from '../actions/sellerActions'

const sellerProduct = (props) => {
    const product = props.product;//geting the product that pass by sellerProducts component
    console.log(product._id);
    const handlesubmit = () => {
        props.ProductWantTOUpdate(product);//adding the the product details want to updatte to reducx
    }
    const handleDelete = () => {
        props.deleteProduct(product._id).then((res) => {//deleting the product from database
            window.location.href = "/seller"// opening the seller page
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="product">
            <img src={product.imageUrl? product.imageUrl:"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"} alt="" />
            <div className="product__info">
                <p className="info__name">{product.itemName}</p>
                <p className="info__description">
                    {product.description}                </p>
                <p className="info__price">{product.price}</p>
                <p className="info__price">{product.countInStock}</p>
                <Link to={`/form`} className="info__button" onClick={handlesubmit}>update</Link>
                <Link to={`/seller`} className="info__button" onClick={handleDelete}>delete</Link>
            </div>
        </div>
    )
}


export default connect(null, { ProductWantTOUpdate, deleteProduct })(sellerProduct)
