import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import HomePage from './HomePage'
import './LoginPage.css'

class userLogin extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        console.log(this.props.users.profile)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() { 
        let { profile,authError } = this.props.users;
        return (
            authError ? (<span className="error error-text">Invalid credentials</span>):(
            profile.id ? (window.location.href = "/"):(<div>
                <form onSubmit={this.handleSubmit} className="form">
                <h3 className="form">Please login</h3>
                    <div className="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form col-3">
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                  
                    <a href="/user/registration" className="form">New,Register now!</a>
                    <div className="form">
                        <button type="submit" class="btn btn-primary right">Login</button>
                    </div>
                </form>
                </div>))        
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ login })(userLogin)
