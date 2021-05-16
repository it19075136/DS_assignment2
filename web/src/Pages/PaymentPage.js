import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Payment extends Component {
    constructor(props){
        super(props);

        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCvc = this.onChangeCvc.bind(this);
        this.onChangeExpMonth = this.onChangeExpMonth.bind(this);
        this.onChangeExpYear = this.onChangeExpYear.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemName :'',
            userID : '', 
            userMail : '',
            noOfItems : '',//make this optional
            totalAmount: '',
            deliveryCharges : '',
            NIC : '',
            PhoneNumber : '',
            CardNumber : '',
            ExpirationMonth : '',
            ExpirationYear : '',
            CVC :''
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
        e.preventDefault();
        const {users} = this.props;
        // this.setState({
        //     itemName :'',
        //     userID : users.profile.id, 
        //     userMail : users.profile.email,
        //     noOfItems : '',//make this optional
        //     totalAmount: '',
        //     deliveryCharges : '',
        //     NIC : this.state.NIC,
        //     PhoneNumber :'',
        //     CardNumber : this.state.CardNumber,
        //     ExpirationMonth : this.state.ExpirationMonth,
        //     ExpirationYear :  this.state.ExpirationYear,
        //     CVC :this.state.CVC
        // })

        const payment = {
            itemName :'',
            userID : users.profile.id, 
            userMail : users.profile.email,
            noOfItems : '',//make this optional
            totalAmount: '',
            deliveryCharges : '',
            NIC : this.state.NIC,
            PhoneNumber :'',
            CardNumber : this.state.CardNumber,
            ExpirationMonth : this.state.ExpirationMonth,
            ExpirationYear :  this.state.ExpirationYear,
            CVC :this.state.CVC            
        }

        console.log('payment: ', payment);

    }


    render() {
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
    users : state.users
})

export default connect(mapStateToProps, {}) (Payment)

