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
            <div className="container">
                <div className="col-">
                    <NavLink exact to='/' className="item">
                        <img src="" alt="idl logo" />
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink exact to="/videos" className="item">Videos</NavLink>
                </div>
                <div className="col">
                    <NavLink exact to='/users' className="item">Users</NavLink>
                </div>
                <div className="col">
                    <NavLink exact to='/account' className="item">My Account</NavLink>
                </div>
                <div className="col">
                    <button className="btn btn-dark" onClick={handleClick}>Logout</button>
                </div>
            </div>
        </nav>  
    )
}

export default AuthNavBar;