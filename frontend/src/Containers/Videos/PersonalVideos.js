import { Component } from 'react';
import { connect } from 'react-redux';
import PersonalVideoList from '../../Components/Videos/PersonalVideoList';
import { Route } from 'react-router-dom';
import VideoViewer from '../../Components/Videos/VideoViewer';

class PersonalVideos extends Component{
    render(){
        let myVids = this.props.videos.videos.filter(video => video.user_id === this.props.user.user.id);
        return(
            <div>
                <PersonalVideoList myVideos={myVids} />
                <Route path={`/videos/:videoId`} render={(routerProps) => 
                    <VideoViewer video={myVids.filter(video => video.uid === routerProps.match.params.videoId)} />}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
  videos: state.videos  
})

export default connect(mapStateToProps)(PersonalVideos);