import React from 'react';

const AllVideos = ({match, videos}) => {
    return (
        <div>
            <h2>Here's something to keep you busy:</h2>
            <VideoList videos={this.props.videos} />

            <Route exact path={`${match.url}/:uid`} render={routerProps => <VideoViewer {...routerProps} />}/>
        </div>
    )
}
export default AllVideos;