import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, login } from '../actions/userActions'
import HomePage from './HomePage'

class userRegistration extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        type: 'buyer'
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        let { profile } = this.props.users;
        console.log(profile);        
        return (
            profile.firstName ? (<HomePage />):(<div>
                <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-auto">
                        <label for="firstName" class="visually-hidden">First Name</label>
                        <input type="text" onChange={this.handleChange} class="form-control-plaintext" id="firstName" name="firstName" placeholder="John" />
                    </div>                    
                    <div class="col-auto">
                        <label for="lastName" class="visually-hidden">Last Name</label>
                        <input type="text" onChange={this.handleChange} class="form-control-plaintext" id="lastName" name="lastName" placeholder="Smith" />
                    </div>                    
                    <div class="col-auto">
                        <label for="phoneNumber" class="visually-hidden">Contact Number</label>
                        <input type="text" onChange={this.handleChange} class="form-control-plaintext" id="phoneNumber" name="phoneNumber" placeholder="0771234567" />
                    </div>                    
                    <div class="col-auto">
                        Select Account Type:
                        <select id="type" name="type" onChange={this.handleChange}>
                        <option key="1" value="Buyer">Buyer</option>
                        <option key="2" value="Seller">Seller</option>
                        </select>
                    </div>                    
                    <div class="col-auto">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="text" onChange={this.handleChange} class="form-control-plaintext" id="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div class="col-auto">
                        <label for="password" class="visually-hidden">Password</label>
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                    
                    <div class="col-auto">
                        <label for="Cpassword" class="visually-hidden">Confirm Password</label>
                        <input type="password" class="form-control" id="Cpassword" name="Cpassword" placeholder="Password" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>)          

        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ addUser, login })(userRegistration)
