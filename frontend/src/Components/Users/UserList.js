import { Component } from 'react';
import { Link } from 'react-router-dom';


class UserList extends Component {
    renderUsers = () => {
        return this.props.users.users.map(user => {
            return( <div className="list-group-item" key={user.uid}><Link className="btn btn-outline-primary btn-block" to={`/users/${user.uid}`}>{user.username}</Link></div>)
        })
    }
    render(){
        return(
            <div className="user-list">
                <h3>Users:</h3>
                <div className="list-group">
                {this.renderUsers()}  
                </div>
            </div>
        );
    }
}
export default UserList