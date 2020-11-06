import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllVideos extends React.Component{
    render(){
        return (
            <div>
                <h2>Pick something to keep you busy:</h2>
                <VideoList videos={this.props.videos} />

                <Route exact path={`${this.props.match.url}/:videoId`} render={() => 
                    <VideoViewer video={this.props.videos.filter(video => video.uid === this.props.match.params.videoId)} />}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    videos: state.videos
})
export default connect(mapStateToProps)(AllVideos);