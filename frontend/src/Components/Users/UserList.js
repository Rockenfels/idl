import { Component } from 'react';
import { Link } from 'react-router-dom';


class UserList extends Component {
    renderUsers = () => {
        return this.props.users.users.map(user => {
            return( <div className="user-item" key={user.uid}><Link to={`/users/${user.uid}`}>{user.username}</Link></div>)
        })
    }
    render(){
        return(
            <div className="user-list">
                <h1>Users:</h1>
                {this.renderUsers()}  
            </div>
        );
    }
}
export default UserList