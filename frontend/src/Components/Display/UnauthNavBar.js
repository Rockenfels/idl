import React from 'react'
import { NavLink } from 'react-router-dom';

const UnauthNavBar = () => {
        return(
            <nav>
                <NavLink exact to='/' className="item">
                    <img src="" alt="idl logo" />
                </NavLink>
                <NavLink to="/videos" className="item">Videos</NavLink>
                <NavLink to='/users' className="item">Users</NavLink>
                <NavLink to='/login' className="item">Log in</NavLink>
            </nav>  
        )
    
}

export default UnauthNavBar;