import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendRemoveVideo } from '../../Reducers/manageVideos';


class PersonalVideoList extends Component {
    handleRemove = (e) => {
        this.props.sendRemoveVideo(e.target.name);
        setTimeout(() => {
            if(this.props.accepted){
                window.alert('Video Removed');
            }
            else{
                window.alert('There was a problem, please try again or send us an email.')
            }
        }, 5000)
    }

    renderVideos = () => {
        return this.props.videos.map(video => {
            return( 
                <div className="video-item" key={video.uid}>
                    <Link to={`/videos/${video.uid}`}>{video.title}</Link>
                    <button name={video.uid} onClick={this.handleRemove}>Remove Video</button>
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
export default connect(null,{sendRemoveVideo})(PersonalVideoList);