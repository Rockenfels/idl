import React from 'react';
import UserVideos from '../../Containers/Videos/UserVideos';

const User = (props) => {
    return(
        <div className="user-container" >
            <h1>{props.user.username}</h1>
            <h2>{props.user.username}'s contributions: </h2>
            <UserVideos match={props.match}/>
        </div>
    );
}
export default User;