import { Component }from 'react';
import { connect } from 'react-redux';
import { sendAddVideo } from '../../Reducers/manageVideos';
import { Redirect } from 'react-router-dom';

class AddVideo extends Component {
    handleSubmit(e){
        e.preventDefault();
        let newVid = document.getElementById('video-url').value;
        debugger;
        this.props.sendAddVideo(newVid);
        setTimeout(() => {
            debugger;
            if(this.props.accepted){
                window.alert("Video Added");
                document.getElementById('video-url').value = "";
                <Redirect to="/account" />
            }
        }, 5000)
    }

    render(){
        return (
            <form id='add-video' onSubmit={this.handleSubmit}>
                <label for="video-url">Your Video URL: </label>
                <input id="video-url" name="video-url" type="text" />
                <input name="submit" type="submit" value="Add Video" />
            </form>
        )
    }
}
export default connect(null, {sendAddVideo})(AddVideo)