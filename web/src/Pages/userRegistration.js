import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'
import './LoginPage.css'
import validator from 'validator'

class userRegistration extends Component {

    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address:'',
        email: '',
        password: '',
        type: ''
    }

    Profile = null;
    // errors = {
    //     email: false,
    //     password: false,
    //     phone: false,
    //     emptyFields: false,
    //     type: false
    // }

    // isValidData = (state) => {
    //     let isValid = true;
    //     if(!validator.isEmail(state.email)){
    //         isValid = false;
    //         this.errors.email = true;
    //     }
    //     if(!validator.isMobilePhone(state.phoneNumber,"any")){
    //         isValid = false;
    //         this.errors.phone = true;
    //     }
    //     if(!validator.equals(state.password,document.getElementById("Cpassword").value)){
    //         isValid = false;
    //         this.errors.password = true;
    //     }
    //     if(validator.isEmpty(state.firstName) || validator.isEmpty(state.lastName) || validator.isEmpty(state.password)){
    //         isValid = false;
    //         this.errors.emptyFields = true;
    //     }
    //     if(validator.isEmpty(state.type)){
    //         isValid = false;
    //         this.errors.type = true;
    //     }
    //     return isValid;
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state).then((res)=>{
            let {profile,authError} = this.props.users
            console.log(profile, authError)
        }).catch((err)=>{
            console.log(err);
            this.Profile = null;
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
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
                    {this.state.type === "Buyer" ? 
                    (<div class="form form-floating col-6">
  <textarea class="form-control" placeholder="Add your shipping address here" name="address" id="address" onChange={this.handleChange}></textarea>
  <label htmlFor="address">Shipping address</label>
</div>):(null)}            
<div class="form row g-2">

                    <div class="form col-3">
                        <input type="password" onChange={this.handleChange} class="form-control" id="password" name="password" placeholder="Password" />
                    </div>                    
                    <div class="form col-3">
                        <input type="password" class="form-control" id="Cpassword" name="Cpassword" placeholder="Repeat Password" />
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
