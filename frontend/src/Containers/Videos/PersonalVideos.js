import { Component } from 'react';
import { connect } from 'react-redux';
import { removeVideo } from '../../Reducers/manageVideos';
import PersonalVideoList from '../../Components/Videos/PersonalVideoList';
import { Route } from 'react-router-dom';
import VideoViewer from '../../Components/Videos/VideoViewer';

class PersonalVideos extends Component{
    render(){
        let myVids = this.props.videos.videos.filter(video => video.user_id === this.props.user.id);
        return(
            <div>
                <PersonalVideoList handleClick={this.handleClick} videos={myVids} removeVideo={this.props.removeVideo} />
                <Route path={`/videos/:videoId`} render={() => 
                    <VideoViewer video={myVids[this.props.match.params.videoId]} />}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
  videos: state.videos  
})

export default connect(mapStateToProps, {removeVideo})(PersonalVideos);