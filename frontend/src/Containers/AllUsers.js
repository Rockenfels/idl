import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllUsers extends React.Component{
    render(){
        return (
            <div>
                <h2>Here's who you're adventuring with:</h2>
                <UserList users={this.props.users} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
export default connect(mapStateToProps)(AllUsers);