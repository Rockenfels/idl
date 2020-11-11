import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendRemoveVideo } from '../../Reducers/manageVideos';


function PersonalVideoList(props) {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch(sendRemoveVideo(e.target.name));
        debugger;
        setTimeout(() => {
            debugger;
            if(props.videos.accepted){
                window.alert('Video Removed');
            }
            else{
                window.alert('There was a problem, please try again or send us an email.')
            }
        }, 2000)
    }

   const renderVideos = () => {
        return props.myVideos.map(video => {
            return( 
                <div className="video-item" key={video.uid}>
                    <Link to={`/videos/${video.uid}`}>{video.title}</Link>
                    <button name={video.uid} onClick={handleRemove}>Remove Video</button>
                </div>)
        })
    }
    return(
        <div className="video-list">
            <h1>Videos</h1>
            {renderVideos()}  
        </div>
    );
}
export default PersonalVideoList;