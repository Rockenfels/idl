import React from 'react';
import UserVideos from '../../Containers/Videos/UserVideos';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User (props) {
    
    let { userId } = useParams();
    let users = useSelector(state => state.users);
    let user = users.users.find(user => user.uid === userId);
    
    return(
        <div className="user-container" >
            <h1>{user.username}</h1>
            <h2>{user.username}'s contributions: </h2>
            <UserVideos userId={userId} user={user}/>
        </div>
    )
}
export default User;