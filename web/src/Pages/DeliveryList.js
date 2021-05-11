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
        console.log('did mount works');
        axios.get('http://localhost:5000/api/delivery/')
        .then(response => {
            console.log('response: ', response);
            this.setState({ deliveries:response.data })
        })
        .catch(error => {
            console.log(error);
        })     
        
    }

    render() {
        return (
            <div>
                <h1>Delivery List Page</h1>
            </div>
        );
    }
}

export default DeliveryList;