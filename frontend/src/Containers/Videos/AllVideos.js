import React from 'react';
import VideoList from '../../Components/Videos/VideoList'
import VideoViewer from '../../Components/Videos/VideoViewer'
import { Route } from 'react-router-dom';
const AllVideos = (props) => {
    return (
        <div>
            <h2>Pick something to keep you busy:</h2>
            <VideoList videos={props.videos} />

            <Route path={`/videos/:videoId`} render={(routerProps) => 
                <VideoViewer video={props.videos.filter(video => video.uid === routerProps.match.params.videoId)} />}
            />
        </div>
    );
}
export default AllVideos;