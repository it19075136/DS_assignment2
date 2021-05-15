import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteDelivery} from '../actions/deliveryActions';


class DeliveryList extends Component {

    constructor(props){
        super(props);

        this.deleteDelivery = this.deleteDelivery.bind(this);
        this.editDelivery = this.editDelivery.bind(this);

        this.state = {
            deliveries : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/delivery/')
        .then(response => {
            this.setState({ deliveries:response.data })
        })
        .catch(error => {
            console.log(error);
        })     
        
    }

    deleteDelivery(value){
  
      const {deleteDelivery} = this.props;
      
      deleteDelivery(value);

    }

    editDelivery(id){
      console.log('id: ', id);

    }

    render() {
        const {deliveries} = this.state;


        return (
          <div>
            <h1>Delivery List Page</h1>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>isCancel</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.exerciseLis()} */}
                {deliveries.map((item) => 
                
                  <tr>
                    <td>{item.deliveryItems.toString()}</td>
                    <td>Rs {item.amount}.00</td>
                    <td>{item.isCancel ? 'true' : 'false'}</td>
                    <td>{item.quantity}</td>
                    <td>
                     {/* <a href="http://localhost:5000/api/delivery/list" 
                     onClick={
                         () => this.deleteDelivery(item._id)
                         }
                         >delete</a> */}
                         <button onClick={() => this.deleteDelivery(item._id)}>Delete</button>
                    </td>
                    <td>
                      <button onClick={() => this.editDelivery(item._id)} >Edit</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  delivery : state.delivery
})

export default connect(mapStateToProps, {deleteDelivery}) (DeliveryList);