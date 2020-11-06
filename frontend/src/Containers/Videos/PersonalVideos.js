import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeVideo } from '../../Reducers/manageVideos';

class PersonalVideos extends React.Component{
    handleClick = (e, uid) => {
        e.preventDefault();
        this.props.removeVideo(uid);
    }
    render(){
        let myVids = this.props.videos.filter(video => video.user_id === this.props.user.id);
        return(
            <div>
                <PersonalVideoList handleClick={this.handleClick} videos={myVids} />
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

export default connect(mapStateToProps, {removeVideo})(PersonalVideos);