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
        <nav className="nav">
                    <NavLink exact to='/' className="navbar-brand">
                        <img src="" alt="idl logo" />
                    </NavLink>
                    <NavLink exact to="/videos" className="nav-item">Videos</NavLink>
                    <NavLink exact to='/users' className="nav-item">Users</NavLink>
                    <NavLink exact to='/account' className="nav-item">My Account</NavLink>
                    <button className="btn" onClick={handleClick}>Logout</button>
        </nav>  
    )
}

export default AuthNavBar;