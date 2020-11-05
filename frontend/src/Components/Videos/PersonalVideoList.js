import React from 'react';
import { Link } from 'react-router-dom';


const PersonalVideoList = (props) => {
    renderVideos = () => {
        return props.videos.map(video => {
            return( <div className="video-item">
                    <Link key={video.uid} to={`/videos/${video.uid}`}>{video.title}</Link>
                    <button onClick={event => this.props.handleClick(event, video.uid)}></button>
                </div>)
        });
    }
    
    return(
        <div className="video-list">
            <h1>Videos</h1>
            {this.renderVideos()}  
        </div>
    );
}
export default PersonalVideoList