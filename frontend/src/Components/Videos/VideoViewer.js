import React from 'react';
import { Player } from 'video-react';
import { useParams } from 'react-router-dom';

function VideoViewer({ videos }){
    let { videoId } = useParams();
    let video = videos.find(video => video.uid === videoId);
    let embedUrl = video.url.slice(0, 24) + 'embed/' + video.url.slice(24);
    debugger;
    return (
        <div id='unauth-viewer'>
            <iframe src={embedUrl}
                frameborder='0'
                allow='encrypted-media'
                allowfullscreen
                title={video.title}
            />
        </div>
    );
}
export default VideoViewer;