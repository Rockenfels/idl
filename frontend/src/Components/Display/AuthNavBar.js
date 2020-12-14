import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { sendLogout } from '../../Reducers/User';
import logo from '../../images/logo.jpg';

function AuthNavBar({ logout }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(sendLogout());
        history.push('/');
    } 

    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <NavLink exact to='/' className="navbar-brand">
                            <img className="img-thumbnail rounded" src={logo} alt="idl logo" />
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
                        <NavLink exact to='/search' className="item btn btn-warning">Title Search</NavLink>
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