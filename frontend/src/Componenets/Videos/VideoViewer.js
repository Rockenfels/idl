import React from 'react';
import { Player }from 'video-react';

const VideoViewer = ({match, video}) => {
    return (
        <div>
             <Player
                playsInline
                fluid
                src={props.video.url}
            />
        </div>
    );
}