import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoViewer({ videos }){
    let { videoId } = useParams();
    let video = videos.find(video => video.uid === videoId);
    return (
        <div id='unauth-viewer'>
            
            <h2>{video.title}</h2>
            <ReactPlayer
                url={video.url}
            />
        </div>
    );
}
export default VideoViewer;