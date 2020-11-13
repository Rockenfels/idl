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
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <NavLink exact to='/' className="navbar-brand">
                            <img src="" alt="idl logo" />
                        </NavLink>
                    </div>
                    <div className='col'>
                        <NavLink exact to="/videos" className="item btn btn-secondary">Videos</NavLink>
                    </div>   
                    <div className='col'>
                        <NavLink exact to='/users' className="item btn btn-secondary">Users</NavLink>
                    </div>   
                    <div className='col'>   
                        <NavLink exact to='/account' className="item btn btn-secondary">My Account</NavLink>
                    </div>    
                    <div className='col'>
                        <button className="item btn btn-primary" onClick={handleClick}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>  
    )
}

export default AuthNavBar;