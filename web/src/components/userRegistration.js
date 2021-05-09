import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'

class userRegistration extends Component {
    render() {
        const { users } = this.props.users;
        console.log(...users);

        const user = {id:"",name:"test3",phoneNumber:"02731238213",email:"test3@gmail.com",type:"seller"}

        const handleSubmit = (u) => {
            console.log(u);
            addUser(u);
            console.log(users);
        }

        return (
            <div>
                Hello users
            <button onClick={() => handleSubmit(user)}>Submit</button>
            </div>

        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,{ addUser })(userRegistration)
