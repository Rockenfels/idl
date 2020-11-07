import React from 'react';
import { NavLink } from 'react-router-dom';


const AuthNavBar = ({ logout }) => {
    return(
        <nav>
            <NavLink exact to='/' className="item">
                <image src="" alt="idl logo" />
            </NavLink>
            <NavLink exact to='/myVideos' className="item">My Videos</NavLink>
            <NavLink exact to="/videos" className="item">Videos</NavLink>
            <NavLink exact to='/users' className="item">Users</NavLink>
            <NavLink exact to='/account' className="item">My Account</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>  
    )
}

export default AuthNavBar;