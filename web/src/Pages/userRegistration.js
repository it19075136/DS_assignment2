import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'
import './LoginPage.css'

class userRegistration extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address:'',
            email: '',
            password: '',
            type: ''
        },
        cPassword: ''
    }

    Profile = null;

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.user.firstName === "" || this.state.user.lastName === "" || this.state.user.email === "" || (this.state.user.type != "Buyer" &&  this.state.user.type != "Seller") || this.state.user.phoneNumber === "")
        alert("Please fill all the fields")
    else{
    if(this.state.user.type === "Buyer"  && this.state.user.address === "")
        alert("Please enter your shipping address");
    else if(this.state.user.password != this.state.cPassword)
        alert("Your passwords doesn't match,please check!");
    else{
        this.props.addUser(this.state.user).then((res)=>{
            let {profile,authError} = this.props.users
            console.log(profile, authError)
        }).catch((err)=>{
            console.log(err);
            this.Profile = null;
        })
    }
    }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name] : e.target.value }
        })
        console.log(this.state);
    }

    handleCPwd = (e) => {
        this.setState({
            ...this.state,
            cPassword : e.target.value 
        })
        console.log(this.state);
    }

    render() {
        let { profile,authError } = this.props.users;
        return (
            profile.id ? (profile.type === "Buyer" ? window.location.href = "/": window.location.href = "/seller"  ):(
                <div>
                <form onSubmit={this.handleSubmit} className="form">
                <h3 className="form">Sign Up</h3>
                <div class="form row g-2">
                {authError ? (<span>**This Email Already Exists, Please Log in : <a href="/user/login">Log in</a></span>):(null)}
                <div class="col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="firstName" name="firstName" placeholder="First Name" />
                    </div>                    
                    <div class="col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                    </div>       
                    </div>
                    <div class="form col-6">
                        <input type="text" onChange={this.handleChange} class="form-control" id="email" name="email" placeholder="Email"  />
                    </div>   
                    <div class="form row g-2">          
                    <div class="form col-3">
                        <input type="text" onChange={this.handleChange} class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Contact Number" />
                    </div>                     
                    <div class="form col-3">
                        <select id="type" name="type" onChange={this.handleChange} className="form-select" >
                        <option selected>Select Account Type</option>
                        <option key="1" value="Buyer">Buyer</option>
                        <option key="2" value="Seller">Seller</option>
                        </select>
                    </div>     
                    </div>    
                    {this.state.user.type === "Buyer" ? 
                    (<div class="form form-floating col-6">
  <textarea class="form-control" placeholder="Add your shipping address here" name="address" id="address" onChange={this.handleChange}></textarea>
  <label htmlFor="address">Shipping address</label>
</div>):(null)}            
<div class="form row g-2">

                    <div class="form col-3">
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                    
                    <div class="form col-3">
                        <input type="password" onChange={this.handleCPwd} class="form-control" id="Cpassword" name="Cpassword" placeholder="Repeat Password" />
                    </div>
                    <div className="form">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                    </div>
                </form>
            </div>
            )          

        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ addUser })(userRegistration)
