import { Component } from 'react';
import { Link } from 'react-router-dom';


class VideoList extends Component {
    renderVideos = () => {
        return this.props.videos.map(video => {
            return( <div className="list-group-item" key={video.uid}><Link className="btn btn-outline-primary btn-block" to={`/videos/${video.uid}`}>{video.title}</Link></div>)
        })
    }
    render(){
        return(
            <div className="video-list">
                <h3 className="h3">Videos</h3>
                <div className="list-group">
                {this.renderVideos()}  
                </div>
            </div>
        );
    }
}
export default VideoList