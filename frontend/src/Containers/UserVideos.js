import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserVideos extends React.Component{
    render(){
        let myVids = this.props.videos.filter(video => video.user_id === this.props.user.id);
        return(
            <div>
                <VideoList videos={myVids} />
                <Route path={`${this.props.match.url}/:videoId`} render={() => 
                    <VideoViewer video={myVids[this.props.match.params.videoId]} />}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
  videos: state.videos  
})

export default connect(mapStateToProps)(UserVideos);