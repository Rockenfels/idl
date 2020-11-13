import { Component } from 'react';
import { Link } from 'react-router-dom';


class VideoList extends Component {
    renderVideos = () => {
        return this.props.videos.map(video => {
            return( <div className="video-item" key={video.uid}><Link to={`/videos/${video.uid}`}>{video.title}</Link></div>)
        })
    }
    render(){
        return(
            <div className="video-list">
                <h3>Videos</h3>
                {this.renderVideos()}  
            </div>
        );
    }
}
export default VideoList