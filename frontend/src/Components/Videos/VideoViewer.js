import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoViewer({ videos }){
    let { videoId } = useParams();
    let video = videos.videos.find(video => video.uid === videoId);
    return (
        <div id='unauth-viewer'>
            <h3 className="h3">{video.title}</h3>
            <div className="embed-responsive embed-responsive-4by3">
                <ReactPlayer className="embed-responsive-item" url={video.url} />
            </div>
        </div>
    );
}
export default VideoViewer;