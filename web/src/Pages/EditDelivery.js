import React, { Component } from 'react';

class EditDelivery extends Component {
    constructor(props){
        super(props);

        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDelivery = this.onChangeDelivery.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            quantity : '',
            amount : '',
            deliveryItems : [],
            isCancel : false
        }
    }

    componentDidMount(){
        
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
        e.preventDefault();

        const deliveryArray = this.state.deliveryItems.split(',');
        const delivery  = {
            quantity : this.state.quantity,
            amount : this.state.amount,
            deliveryItems : deliveryArray,
            isCancel : false
        }
        console.log('delivery: ', delivery);

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
                                value={this.state.delivery}
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
                        <input type="submit" value="Create Delivery" className="btn btn-primary" />
                    </div>
                </form>
 

                
            </div>
        );
    }
}

export default EditDelivery;