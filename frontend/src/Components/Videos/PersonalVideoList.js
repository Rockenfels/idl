import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PersonalVideoList extends Component {
    renderVideos = () => {
        return this.props.videos.map(video => {
            return( <div className="video-item">
                    <Link key={video.uid} to={`/videos/${video.uid}`}>{video.title}</Link>
                    <button onClick={this.props.removeVideo(video.uid)}>Remove Video</button>
                </div>)
        })
    }
    render(){
        return(
            <div className="video-list">
                <h1>Videos</h1>
                {this.renderVideos()}  
            </div>
        );
    }
}
export default PersonalVideoList