import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import {addPayment} from '../actions/paymentAction';
import {addDelivery} from '../actions/deliveryActions';



class Payment extends Component {
    constructor(props){
        super(props);

        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCvc = this.onChangeCvc.bind(this);
        this.onChangeExpMonth = this.onChangeExpMonth.bind(this);
        this.onChangeExpYear = this.onChangeExpYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChangeDelivery = this.handleChangeDelivery.bind(this);

        this.state = {
            itemName :'',
            userID : '', 
            userMail : '',
            noOfItems : '',//make this optional
            totalAmount: '',
            deliveryCharges : 300,
            NIC : '',
            PhoneNumber : '',
            CardNumber : '',
            ExpirationMonth : '',
            ExpirationYear : '',
            CVC :'',
            delivery : "Prompt Express"
        }
    }

    componentDidMount(){
      
      

    }

    onChangeNic(e){
        this.setState({
            NIC : e.target.value
        })
    }

    onChangeCardNumber(e){
        this.setState({
            CardNumber : e.target.value
        })
    }

    onChangeExpMonth(e){
        this.setState({
            ExpirationMonth : e.target.value
        })
    }

    onChangeExpYear(e){
        this.setState({
            ExpirationYear : e.target.value
        })
    }

    onChangeCvc(e){
        this.setState({
            CVC : e.target.value
        })
    }

    onSubmit(e){

        const {addPayment,addDelivery} = this.props;

        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        console.log('cartItems: ', cartItems);

        const itemnames = cartItems.map((item) => {
            return item.name;
        })
        
        console.log('itemnames: ', itemnames);
        const s = cartItems.reduce(
            (s,{price}) => s+price,0
            );

        e.preventDefault();
        const {users, orders} = this.props;

        const payment = {
            itemNames : itemnames,
            userID : users.profile.id, 
            userMail : users.profile.email,
            noOfItems : itemnames.length,//make this optional
            totalAmount: s,
            deliveryCharges : this.state.deliveryCharges,
            NIC : this.state.NIC,
            PhoneNumber : users.profile.phone,
            CardNumber : this.state.CardNumber,
            ExpirationMonth : this.state.ExpirationMonth,
            ExpirationYear :  this.state.ExpirationYear,
            CVC :this.state.CVC,
            delivery : this.state.delivery,
            address : users.profile.address            
        }

        const delivery = { 
            order_id : 'order_id',
            user_id : users.profile.id,
            quantity : itemnames.length,
            amount : s,
            deliveryItems : itemnames,
            isCancel : false,
            address: users.profile.address,
            deliveryMethod : this.state.delivery,
            deliveryCharges : this.state.deliveryCharges
        }
        
        console.log('delivery: ', delivery);
        addPayment(payment);
        addDelivery(delivery);



        this.setState({
            
                itemName :'',
                userID : '', 
                userMail : '',
                noOfItems : '',//make this optional
                totalAmount: '',
                deliveryCharges : 300,
                NIC : '',
                PhoneNumber : '',
                CardNumber : '',
                ExpirationMonth : '',
                ExpirationYear : '',
                CVC :'',
                delivery : "Prompt Express"
            
        })
        
        
    }

    handleChangeDelivery(e){
        let charges = null;
        if(e.target.value == 'Prompt Express'){
            charges = 300;
        }else if (e.target.value == 'DHL'){
            charges = 550;
        }else if (e.target.value == 'TUKTUK'){
            charges = 300;
        }
        this.setState({
            delivery: e.target.value,
            deliveryCharges : charges
            
        })

        
    }


    render() {
        const {users,orders} = this.props;
        console.log('users: ', users);
        console.log('orders: ', orders);


        return (
            <div>
                <h3>Payment Information</h3>
                <form onSubmit={this.onSubmit} className="container">
                
                     <div className="form-group">
                            <label>Enter your NIC</label>
                            <input type="text"
                               
                                required
                                className="form-control"
                                value={this.state.NIC}
                                onChange={this.onChangeNic}
                            />
                    </div>

                    <br></br>
                    <div className="form-group">
                            <label>Card Number</label>
                            <input type="text"
                            pattern="[0-9]*"

                                required
                                className="form-control"
                                value={this.state.CardNumber}
                                onChange={this.onChangeCardNumber}
                            />
                    </div>

                    <br></br>
                    <div className="form-group">
                            <label>Expiration Month</label>
                            <input type="text"
                                pattern="[0-9]*"
                                required
                                className="form-control"
                                maxLength="2"
                                value={this.state.ExpirationMonth}
                                onChange={this.onChangeExpMonth}
                            />
                    </div>    
                    <br></br> 
                    <div className="form-group">
                            <label>Expiration Year</label>
                            <input type="text"
                                pattern="[0-9]*"
                                required
                                className="form-control"
                                maxLength="4"
                                value={this.state.ExpirationYear}
                                onChange={this.onChangeExpYear}
                            />
                    </div>    
                    <br></br>
                    <div className="form-group">
                            <label>CVC</label>
                            <input type="text"
                                pattern="[0-9]*"
                                required
                                className="form-control"
                                maxLength="3"
                                value={this.state.CVC}
                                onChange={this.onChangeCvc}
                            />
                    </div>
                    <br></br>
                    <select 
                        value={this.state.delivery} 
                        onChange={this.handleChangeDelivery} 
                    >
                    <option value="Prompt Express">Prompt Express</option>
                        <option value="DHL">DHL</option>
                        <option value="TUKTUK">Tuk Tuk</option>
                    </select>   
                    <br></br>
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Pay Now" className="btn btn-primary" />
                    </div>
                </form>
 
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // delivery : state.delivery
    users : state.users,
    cartItems : state.cartItems,
    orders : state.orders
})

export default connect(mapStateToProps, {addPayment,addDelivery}) (Payment)

