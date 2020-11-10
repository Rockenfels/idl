import { Component } from 'react';
import { Link } from 'react-router-dom';


class VideoList extends Component {
    renderVideos = () => {
        return this.props.videos.map(video => {
            return( <div className="video-item"><Link key={video.uid} to={`/videos/${video.uid}`}>{video.title}</Link></div>)
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
export default VideoList