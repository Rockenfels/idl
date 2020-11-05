import React from 'react';
import { Link } from 'react-router-dom';


const UserList = (props) => {
    renderUsers = () => {
        return props.users.map(user => {
            return( <div className="user-item"><Link key={user.uid} to={`/users/${user.uid}`}>{user.title}</Link></div>)
        })
    }
    
    return(
        <div className="user-list">
            <h1>Users:</h1>
            {this.renderUsers()}  
        </div>
    );
}
export default UserList