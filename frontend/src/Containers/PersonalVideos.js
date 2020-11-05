import React from 'react';

const PersonalVideos = ({match, videos}) => {
        let myVids = this.props.videos.filter(video => video.user_id === this.props.user.id);
        return(
            <div>
                <h2>Here are your videos:</h2>
                <VideoList videos={myVids} />
            </div>
        )
    
        };

export default PersonalVideos;