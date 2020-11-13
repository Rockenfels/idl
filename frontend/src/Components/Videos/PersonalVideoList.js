import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendRemoveVideo } from '../../Reducers/manageVideos';


function PersonalVideoList(props) {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch(sendRemoveVideo(e.target.name));
    }

   const renderVideos = () => {
        return props.myVideos.map(video => {
            return( 
                <div className="list-group-item" key={video.uid}>
                    <Link to={`/videos/${video.uid}`}>{video.title}</Link>
                    <button name={video.uid} onClick={handleRemove}>Remove Video</button>
                </div>)
        })
    }
    return(
        <div className="video-list">
            <h3>Videos</h3>
            <div className="list-group">
            {renderVideos()}
            </div>  
        </div>
    );
}
export default PersonalVideoList;