import React from 'react';
import { connect } from 'react-redux';
import UserVideos from '../../Containers/Videos/UserVideos';
import { useParams } from 'react-router-dom';


function User (props) {
    let { userId } = useParams();
    let user = props.users.find(user => user.uid === userId);
    debugger;
    return(
        <div className="user-container" >
            <h1>{user.username}</h1>
            <h2>{user.username}'s contributions: </h2>
            <UserVideos userId={userId}/>
        </div>
    )
}
export default User;