import React from 'react';
import PersonalVideos from '../../Containers/PersonalVideos';

const User = (props) => {
    return(
        <div className="user-container" >
            <h1>{props.user.username}</h1>
            <h2>What you've contributed: </h2>
            <PersonalVideos match={props.match}/>
        </div>
    );
}