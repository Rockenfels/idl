import React from 'react';

const AllVideos = ({match, videos}) => {
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
export default AllVideos;