import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, login } from '../actions/userActions'
import HomePage from './HomePage'
import './LoginPage.css'

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
        this.props.addUser(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        let { profile } = this.props.users;
        return (
            profile.id ? (<HomePage />):(<div>
                <form onSubmit={this.handleSubmit} className="form">
                <h3 className="form">Sign Up</h3>
                <div class="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                    </div>                    
                    <div class="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                    </div>                    
                    <div class="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Contact Number" />
                    </div>                     
                    <div class="form col-3">
                        Select Account Type:
                        <select id="type" name="type" onChange={this.handleChange} className="form-control">
                        <option key="1" value="Buyer">Buyer</option>
                        <option key="2" value="Seller">Seller</option>
                        </select>
                    </div>                     
                    <div class="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                    <div class="form col-3">
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                    
                    <div class="form col-3">
                        <input type="password" class="form-control" id="Cpassword" name="Cpassword" placeholder="Repeat Password" />
                    </div>
                    <div className="form">
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
