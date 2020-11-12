import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';


function AuthNavBar({ logout }) {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        logout();
        history.push('/');
    } 

    return(
        <nav>
            <NavLink exact to='/' className="item">
                <img src="" alt="idl logo" />
            </NavLink>
            <NavLink exact to="/videos" className="item">Videos</NavLink>
            <NavLink exact to='/users' className="item">Users</NavLink>
            <NavLink exact to='/account' className="item">My Account</NavLink>
            <button onClick={handleClick}>Logout</button>
        </nav>  
    )
}

export default AuthNavBar;