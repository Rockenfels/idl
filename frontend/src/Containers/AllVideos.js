import React, { Component } from 'react';
import { connect } from 'react-redux';
class AllVideos extends React.Component{
    render(){
        return (
            <div>
                <h2>Here's something to keep you busy:</h2>
                <VideoList videos={this.props.videos} />

                <Route exact path={`${match.url}/:videoId`} render={() => 
                    <VideoViewer video={this.props.videos[this.props.match.params.videoId]} />}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    videos: state.video
})
export default connect(mapStateToProps)(AllVideos);