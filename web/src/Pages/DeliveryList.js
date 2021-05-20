import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteDelivery, editDeliveryCache, updateDelivery} from '../actions/deliveryActions';
import { Link } from 'react-router-dom'



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
      
      // deleteDelivery(value);

    }

    editDelivery(item){
      const {setFinal, editDeliveryCache} = this.props;
      editDeliveryCache(item);
      setFinal();
      
    }

    render() {
        const {deliveries} = this.state;
        console.log('deliveries: ', deliveries);


        return (
          <div>
            <h1>Delivery List Page</h1>
            <button onClick={() => window.location.href ="/delivery"}>Add a new delivery</button>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Items</th>
                  <th>Order Id</th>
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
                    <td>{item.order_id}</td>
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
                      <button onClick={() => this.editDelivery(item)} >Edit</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

class EditDelivery extends Component {
  constructor(props){
      super(props);

      this.onChangeAmount = this.onChangeAmount.bind(this);
      this.onChangeDelivery = this.onChangeDelivery.bind(this);
      this.onChangeQuantity = this.onChangeQuantity.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        order_id : 'order_id',
        user_id : '',
        quantity : '',
        amount : '',
        deliveryItems : '',
        isCancel : false,
        address: '',
        deliveryMethod : '',
        deliveryCharges : ''
      }
  }

  componentDidMount(){

    const {editDelivery} = this.props.delivery;

    this.setState(
      {
        quantity : editDelivery.quantity,
        amount : editDelivery.amount,
        deliveryItems : editDelivery.deliveryItems.toString(),
        isCancel : false,
        order_id : 'order_id',
        user_id : editDelivery.user_id,
        address : editDelivery.address,
        deliveryMethod : editDelivery.delivery,
        deliveryCharges :editDelivery.deliveryCharges
      }
    )
    
      
  }

  onChangeAmount(e){
      this.setState({
          amount: e.target.value
      })
  }

  onChangeDelivery(e){
      this.setState({
          deliveryItems: e.target.value
      })
  }

  onChangeQuantity(e){
      this.setState({
          quantity: e.target.value
      })
  }

  onSubmit(e){
    const {updateDelivery,delivery,setFinal} = this.props;
    e.preventDefault();

      const deliveryArray = this.state.deliveryItems.split(',');
      const deliveryUpdate  = {
          quantity : this.state.quantity,
          amount : this.state.amount,
          deliveryItems : deliveryArray,
          isCancel : false,
          order_id : 'order_id',
          user_id : this.state.user_id,
          address : this.state.address,
          deliveryMethod : this.state.delivery,
          deliveryCharges :this.state.deliveryCharges
      }

      deliveryUpdate._id = delivery.editDelivery._id;
      
      updateDelivery(deliveryUpdate);
      setFinal();
      window.location.reload();
  }

  goBack(){
    const {setFinal} = this.props;
    setFinal();
  }

  render() {
      return (
          <div>
              <h3>Create a Delivery</h3>
              <form onSubmit={this.onSubmit} className="container">
              
                   <div className="form-group">
                          <label>Quantity</label>
                          <input type="text"
                              pattern="[0-9]*"
                              required
                              className="form-control"
                              value={this.state.quantity}
                              onChange={this.onChangeQuantity}
                          />
                  </div>

                  <br></br>
                  <div className="form-group">
                          <label>Enter Delivery Items</label>
                          <input type="text"
                              required
                              placeholder="item1,item2,item3"
                              className="form-control"
                              value={this.state.deliveryItems}
                              onChange={this.onChangeDelivery}
                          />
                  </div>

                  <br></br>
                  <div className="form-group">
                          <label>Enter the Amount</label>
                          <input type="text"
                              pattern="[0-9]*"
                              required
                              className="form-control"
                              value={this.state.amount}
                              onChange={this.onChangeAmount}
                          />
                  </div>    
                  <br></br>
                  <div className="form-group">
                      <input type="submit" value="Update Delivery" className="btn btn-primary" />
                  </div>
                  <div>
                    <button onClick={() => this.goBack()}>Go Back</button>
                  </div>
              </form>


              
          </div>
      );
  }
}

class Parent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.setItem = this.setItem.bind(this);

    this.state = {
      final: false,
      item : {}
     
    };
  }

  componentDidMount() {
   
  }

  setItem(item){
    this.setState({
      item
    })
    
  }

  setFinal() {
    const { final } = this.state;
    this.setState({
      final: !final
    });
  }

  render() {
    const { final, item } = this.state;
   
    return (
      <div >
        {final ? (
            <EditDelivery item = {item} {...this.props} setFinal={() => this.setFinal()} />
        ) : (     
            <DeliveryList {...this.props}  setFinal={() => this.setFinal()} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  delivery : state.delivery,
  editDelivery : state.editDelivery,
  updatedDelivery : state.updatedDelivery

})

export default connect(mapStateToProps, {deleteDelivery,editDeliveryCache,updateDelivery}) (Parent);