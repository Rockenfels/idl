import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendAddVideo } from '../../Reducers/manageVideos';
import { useHistory } from 'react-router-dom';

function AddVideo(){
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let newUrl = document.getElementById('video-url').value;
        let newTitle = document.getElementById('video-title').value;
        let newVid = {
            url: newUrl,
            title: newTitle,
            user_id: user.user.id
        }
        dispatch(sendAddVideo(newVid));
        setTimeout(() => {
            if(user.accepted){
                document.getElementById('video-url').value = "";
                history.push('/account');
            }
        }, 500)
    }

    return (
        <form id='add-video' onSubmit={handleSubmit}>
            <div className="form-group row">    
                <label className="col-sm-2 col-form-label" htmlFor="video-title">Video Title: </label>
                <div class="col-sm-10">  
                    <input className="form-control" id="video-title" type="text" />
                </div>
                <label className="col-sm-2 col-form-label" htmlFor="video-url">Video URL: </label>
                <div class="col-sm-10">    
                    <input className="form-control" id="video-url" name="video-url" type="text" />
                </div>
                <div class="col-sm-10">    
                    <input className="form-control btn btn-primary" name="submit" type="submit" value="Add Video" />
                </div>
            </div>
        </form>
    )
}
export default AddVideo;