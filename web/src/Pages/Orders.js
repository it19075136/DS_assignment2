import React, { Component } from 'react'
import Order from './Order'
import { connect } from 'react-redux'

export default class Orders extends Component {
    render() {
        const {orders} = this.props;
        return (

            <div>
              <Order />
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        orders:state.orders
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)
