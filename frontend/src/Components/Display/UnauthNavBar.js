import React from 'react'
import { NavLink } from 'react-router-dom';

const UnauthNavBar = () => {
        return(
            <nav>
                <NavLink exact to='/' className="item">
                    <img src="" alt="idl logo" />
                </NavLink>
                <NavLink exact to='/myVideos' className="item">My Videos</NavLink>
                <NavLink exact to="/videos" className="item">Videos</NavLink>
                <NavLink exact to='/users' className="item">Users</NavLink>
                <NavLink exact to='/login' className="item">Log in</NavLink>
            </nav>  
        )
    
}

export default UnauthNavBar;