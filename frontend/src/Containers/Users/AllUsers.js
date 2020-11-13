import { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../../Components/Users/UserList';

class AllUsers extends Component{
    render(){
        return (
            <div id="unauth-userlist">
                <h2 className="h2">Here's who you're adventuring with:</h2>
                <UserList users={this.props.users} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})
export default connect(mapStateToProps)(AllUsers);