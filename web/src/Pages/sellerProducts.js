import { useParams } from 'react-router'
import './HomePage.css'
import { connect } from 'react-redux'
import React, { Component, useState, useEffect } from 'react'
import { getProducts } from '../actions/productActions'
import SellerProduct from './sellerProduct'

import { addProduct, updateStateRed } from '../actions/sellerActions';
class sellerProducts extends Component {
  componentDidMount() {
    this.props.getProducts();
    console.log('componentdidmount')
  }

  render() {

    const user = this.props.user;
    console.log(user)

    const handleUpdateStateRed = () => {
      updateStateRed();
    }
    const products = this.props.products;
    console.log(products)
    const sellerProductsList = products ? (products.filter(product => product.sellerId == user.id)) : null
    console.log(sellerProductsList)
    const sellerProductArr = sellerProductsList.map(product => {
      return (<SellerProduct product={product} />)
    })
    console.log(sellerProductArr)
    return (
      <div className="homepage">
        <a href='/form' className='info__button' onClick={handleUpdateStateRed}>Add a product</a>
        <div className="homepage__products">
          {sellerProductArr}
        </div>


      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    user: state.users.profile,
  }
}

export default connect(mapStateToProps, { getProducts, addProduct, updateStateRed })(sellerProducts)