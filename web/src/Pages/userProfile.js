import React, {Component} from 'react'
import { connect } from 'react-redux'
import hashPassword from 'password-hash'
import {updateUser, getUserById, deleteUser} from '../actions/userActions'

class UserProfile extends Component{

  state = {
    userUpdate:{
        firstName: this.props.users.currentUser.firstName,
        lastName: this.props.users.currentUser.lastName,
        phoneNumber: this.props.users.currentUser.phoneNumber,
        address:this.props.users.currentUser.address,
        type: this.props.users.currentUser.type,
        email: this.props.users.currentUser.email,
        Newpassword: ''
    },
    oldPassword:'',
    field1: true,
    field2: true,
    field3: true,
    field4: true,
    field5: true,
    field6: true,
    field7: true,

  }

  handleChange = (e) => {
    if(e.target.name == "oldPassword")
        this.setState({...this.state,oldPassword:e.target.value})
    else{
    this.setState({
      ...this.state,
      userUpdate: {
          ...this.state.userUpdate,
          [e.target.name]: e.target.value
      }
  });
}
  console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.userUpdate.firstName === "" || this.state.userUpdate.lastName === "" || this.state.userUpdate.email === "" || (this.state.userUpdate.type != "Buyer" &&  this.state.userUpdate.type != "Seller") || this.state.userUpdate.phoneNumber === "")
        alert("Please fill all the fields")
    else{
    if(this.state.userUpdate.type === "Buyer"  && this.state.userUpdate.address === "")
        alert("Please enter your shipping address");
    else if(!hashPassword.verify(this.state.oldPassword,this.props.users.currentUser.password))
            alert("Invalid Old Password, Please check and enter the correct password");
    else{
        if(this.state.userUpdate.Newpassword === "")
            this.state.userUpdate.Newpassword = this.state.oldPassword
        console.log(this.state.userUpdate);
        this.props.updateUser(this.props.users.profile.id,this.state.userUpdate).then((res)=>{
            alert("Update successful!");
        }).catch((err)=>{
            alert("Update failed");
        });
    }
    }
  }

  handleDelete = () => {
      console.log("Delete Pressed")
      if(!hashPassword.verify(this.state.oldPassword,this.props.users.currentUser.password))
            alert("Invalid Old Password, Please check and enter the correct password");
        else{
      this.props.deleteUser(this.props.users.profile.id).then((res)=>{
          console.log(res);
          alert("Deleted Successfully!");
          window.location.href="/user/login"
        })
        }
  }

  componentDidMount = () =>{
        this.props.getUserById(this.props.users.profile.id).then((res)=>{
            console.log(res);
            this.setState({
                ...this.state,
                userUpdate: {
                    ...this.state.userUpdate,
                    firstName: this.props.users.currentUser.firstName,
                    lastName: this.props.users.currentUser.lastName,
                    phoneNumber: this.props.users.currentUser.phoneNumber,
                    address:this.props.users.currentUser.address,
                    type: this.props.users.currentUser.type,
                    email: this.props.users.currentUser.email,
                }
            });
        }).catch((err) => {
            console.log(err);
        })
  }

    render(){
        
        console.log(this.props.users.profile)
        return(
          <form onSubmit={this.handleSubmit} className="form">
          <h3 className="form">Edit Profile or <button type="button" class="btn btn-danger mb-3" onClick={this.handleDelete}>Delete Profile</button>
</h3>
          <div class="form row g-2">
              <div><i>Modify the fields that you need to update</i></div>
          <div class="col-3">
                  <input type="text" onChange={this.handleChange} class="form-control" id="firstName" name="firstName" placeholder="First Name" defaultValue={this.props.users.currentUser.firstName}/>
              </div>                    
              <div class="col-3">
                  <input type="text" onChange={this.handleChange} class="form-control" id="lastName" name="lastName" placeholder="Last Name" defaultValue={this.props.users.currentUser.lastName}/>
              </div>       
              </div>
              <div class="form col-6">
                  <input type="text" onChange={this.handleChange} class="form-control" id="email" name="email" placeholder="Email" defaultValue={this.props.users.currentUser.email} />
              </div>   
              <div class="form row g-2">          
              <div class="form col-3">
                  <input type="text" onChange={this.handleChange} class="form-control" id="phoneNumber" name="phoneNumber" placeholder="Contact Number" defaultValue={this.props.users.currentUser.phoneNumber}/>
              </div>                     
              <div class="form col-3">
                  <select id="type" name="type" onChange={this.handleChange} className="form-select" defaultValue={this.props.users.currentUser.type}>
                  <option key="1" value="Buyer" selected={this.props.users.currentUser.type === "Buyer"}>Buyer</option>
                  <option key="2" value="Seller" selected={this.props.users.currentUser.type === "Seller"}>Seller</option>
                  </select>
              </div>     
              </div>    
              {this.state.userUpdate.type === "Buyer" ? 
              (<div class="form form-floating col-6">
<textarea class="form-control" placeholder="Add your shipping address here" name="address" id="address" onChange={this.handleChange} defaultValue={this.props.users.currentUser.address}></textarea>
<label htmlFor="address">Shipping address</label>
</div>):(null)}            
<div class="form row g-2">

              <div class="form col-3">
                  <input type="password" onChange={this.handleChange} class="form-control" id="oldPassword" name="oldPassword" placeholder="Old Password" />
              </div>                    
              <div class="form col-3">
                  <input type="password" class="form-control" id="Newpassword" name="Newpassword" placeholder="New Password" onChange={this.handleChange} />
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

export default connect(mapStateToProps,{updateUser,getUserById, deleteUser})(UserProfile)