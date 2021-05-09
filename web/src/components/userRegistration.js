import React, { Component } from 'react'
import { connect } from 'react-redux'

class userRegistration extends Component {
    render() {
        const { users } = this.props.users;
        console.log(...users);
        return (
            <div>
                Hello users
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps,null)(userRegistration)
