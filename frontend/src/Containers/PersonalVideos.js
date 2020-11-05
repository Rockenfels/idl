import React from 'react';

const PersonalVideos = ({match, videos}) => {
        let myVids = this.props.videos.filter(video => video.user_id === this.props.user.id);
        return(
            <div>
                <VideoList videos={myVids} />
                <Route path={`${match.url}/:videoId`} render={() => 
                    <VideoViewer video={myVids[this.props.match.params.videoId]} />}
                />
            </div>
        )
    
};

export default PersonalVideos;