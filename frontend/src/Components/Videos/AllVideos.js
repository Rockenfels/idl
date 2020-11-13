import React from 'react';
import VideoList from './VideoList'
import VideoViewer from './VideoViewer'
import { Route, Link } from 'react-router-dom';
import VideoSearch from './VideoSearch';

const AllVideos = (props) => {
    return (
        <div id='all-videos' className='card'>
            <div className='card-body'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="h2">Pick something to keep you busy:</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <VideoList videos={props.videos.videos} />
                        </div>
                        <div className="col-8">
                            <Route path={`/videos/:videoId`}>
                            <VideoViewer videos={props.videos} />
                            </Route>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
}
export default AllVideos;