import React from 'react'
import { NavLink } from 'react-router-dom';

const UnauthNavBar = () => {
        return(
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <NavLink exact to='/' className="navbar-brand">
                                <img src="" className="img-thumbnail rounded" alt="idl logo" />
                            </NavLink>
                        </div>
                        <div className='col'>
                            <NavLink to="/videos" className="item btn btn-secondary">Videos</NavLink>
                        </div>
                        <div className='col'>
                            <NavLink to='/users' className="item btn btn-secondary">Users</NavLink>
                        </div>
                        <div className='col'>
                            <NavLink to='/login' className="item btn btn-primary">Log in</NavLink>
                        </div>
                    </div>
                </div>
            </nav>  
        )
    
}

export default UnauthNavBar;