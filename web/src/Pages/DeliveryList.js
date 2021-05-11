import React, { Component } from 'react';
import axios from 'axios';

class DeliveryList extends Component {

    constructor(props){
        super(props);
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

    render() {
        const {deliveries} = this.state;
        console.log('deliveries: ', deliveries);


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
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DeliveryList;