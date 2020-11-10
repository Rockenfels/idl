import React from 'react';
import VideoList from './VideoList'
import VideoViewer from './VideoViewer'
import { Route } from 'react-router-dom';
const AllVideos = (props) => {
    return (
        <div id='unauth-videos'>
            <h2>Pick something to keep you busy:</h2>
            <VideoList videos={props.videos} />

            <Route path={`/videos/:videoId`}>
             <VideoViewer videos={props.videos} />
            </Route>
        </div>
   );
}
export default AllVideos;