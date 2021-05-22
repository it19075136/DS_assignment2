import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getUserById } from  '../actions/userActions'

class UserProfile extends Component{

  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address:'',
    type: '',
    email: '',
    Newpassword: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value 
  })
  console.log(this.state);
  }

  componentDidMount(){
    let { profile } = this.props.users;
    this.props.getUserById(profile.id).then((res)=>{
      console.log(res);
      let { currentUser } = this.props.users;
      console.log(currentUser);
      this.setState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phoneNumber: currentUser.phoneNumber,
        address: currentUser.address,
        type: currentUser.type,
        email: currentUser.email,
        Newpassword: ''
      })
      console.log(this.state);
    }).catch((err)=>{
      console.log(err);
    }
    )
  }

    render(){

        return(
          <form onSubmit={this.handleSubmit} className="form">
          <h3 className="form">Sign Up</h3>
          <div class="form row g-2">
          {/* {authError ? (<span>**This Email Already Exists, Please Log in : <a href="/user/login">Log in</a></span>):(null)} */}
          <div class="col-3">
                  <input type="text" onChange={this.handleChange} class="form-control" id="firstName" name="firstName" placeholder="First Name"/>
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
                  <input type="password" onChange={this.handleChange} class="form-control" id="oldPassword" name="oldPassword" placeholder="Old Password" />
              </div>                    
              <div class="form col-3">
                  <input type="password" class="form-control" id="Newpassword" name="Newpassword" placeholder="New Password" />
              </div>
              <div className="form">
                  <button type="submit" class="btn btn-primary mb-3">Update</button>
              </div>
              </div>
          </form>)
    }
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps,{getUserById})(UserProfile)