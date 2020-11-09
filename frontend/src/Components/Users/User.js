import React from 'react';
import UserVideos from '../../Containers/Videos/UserVideos';

const User = (props) => {
    debugger;
    return(
        <div className="user-container" >
            <h1>{props.user.username}</h1>
            <h2>{props.user.username}'s contributions: </h2>
            <UserVideos user={props.user}/>
        </div>
    );
}
export default User;