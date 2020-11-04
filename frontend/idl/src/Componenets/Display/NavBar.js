import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = (props) => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
    return(
        <nav>
            <NavLink exact to='/' className="item">
                <image src="" alt="idl logo" />
            </NavLink>
            <NavLink exact to="/videos" className="item">Videos</NavLink>
            {isLoggedIn ? 
                <NavLink exact to="/login" className="item">Login</NavLink> 
                : <NavLink exact to="/logout" className="item">Logout</NavLink>}
        </nav>  
    )
}

export default NavBar;