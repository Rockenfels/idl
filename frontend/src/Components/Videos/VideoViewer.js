import React from 'react';
import { Player }from 'video-react';

const VideoViewer = (props) => {
    return (
        <div>
             <Player
                fluid
                src={props.video.url}
            />
        </div>
    );
}
export default VideoViewer;