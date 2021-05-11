import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import HomePage from './HomePage'

class userLogin extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.login(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() { 
        let { profile } = this.props.users;
        let { authError } = this.props.users;       
        return (
            profile.firstName ? (<HomePage />):(<div>
                <h3>Please login</h3>
                <form onSubmit={this.handleSubmit}>
                <div class="col-auto">
                        <label for="email" class="visually-hidden">Email</label>
                        <input type="text" onChange={this.handleChange} class="form-control-plaintext" id="email" name="email" placeholder="email@example.com" />
                    </div>
                    <div class="col-auto">
                        <label for="password" class="visually-hidden">Password</label>
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                    
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Login</button>
                    </div>
                </form>
                <h4><a href="/user/registration">Don't have an account, Register now!!!</a></h4>
                </div>)          
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ login })(userLogin)
