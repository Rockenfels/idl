import { Component } from 'react'
import { connect } from 'react-redux';
import PersonalVideos from '../Videos/PersonalVideos';
import EditAccount from './EditAccount';
import { Link, Route } from 'react-router-dom';
import AddVideo from '../Videos/AddVideo';
import { sendLogin } from '../../Reducers/user';
import { getVideos } from '../../Reducers/manageVideos';

class Account extends Component {
    componentDidMount(){
        let localUser = window.localStorage.getItem('user');
        if(localUser !== null && this.props.user.user === null){
            this.props.sendLogin(JSON.parse(localUser));
        }
        if(this.props.videos.videos.length === 0){
            this.props.getVideos();
        }
    }

    render(){    
        let { user, videos } = this.props;
        return (
            <div id='account' className='account'>
                <div id='account-info'>
                    <h2> Your Info:</h2>
                    <p>Username: {user.user !== null ? user.user.username : ""}</p>
                    <p>Email: {user.user !== null ? user.user.email : ""}</p>
                </div>
                <h2>Your Contributions:</h2>
                <PersonalVideos user={user} videos={videos}/>
                <div id='edit-form-container'>
                    <Link to='/account/edit'>Edit Account</Link>
                    <Route path='/account/edit' >
                        <EditAccount id='edit' user={user} />
                    </Route>
                    <Link to='account/add'>New Video</Link>
                    <Route path='/account/add' >
                        <AddVideo id='add' />
                    </Route>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    videos: state.videos
})
export default connect(mapStateToProps, {sendLogin, getVideos})(Account);