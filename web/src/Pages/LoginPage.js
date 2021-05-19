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

        this.props.login(this.state).then((res)=>{

            console.log(res,this.props.users.profile);
            let {profile} = this.props.users

            if(profile.type){
                switch (profile.type) {
                    case "Buyer":
                        window.location.href = "/"
                        break;
                    default:
                        window.location.href = "/seller"
                        break;
                }
            }
        }).catch((err)=>{
            console.log(err);
        })    
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() { 
        let { profile,authError } = this.props.users;
        return (
            profile.id ? (profile.type === "Buyer" ? window.location.href = "/": window.location.href = "/seller"  ):(<div>
                <form onSubmit={this.handleSubmit} className="form">
                <h3 className="form">Please login</h3>
                {authError ? (<span>**Invalid credentials</span>):(null)}
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
                </div>)        
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ login })(userLogin)
