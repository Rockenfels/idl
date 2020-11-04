import React from 'react';

const VideoList = (props) => {
    renderVideos = () => {
        return props.videos.map(video => {
            return <li></li>
        })
    }
    return(
        <div className="video-list">
            <ul>

            </ul>
        </div>
    );
}
export default VideoList