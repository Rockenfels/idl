import { Component } from 'react'
import { connect } from 'react-redux';
import PersonalVideos from '../Videos/PersonalVideos';
import EditAccount from './EditAccount';
import { Link, Route } from 'react-router-dom';
import AddVideo from '../Videos/AddVideo';
import { login } from '../../Reducers/user';
import { getVideos } from '../../Reducers/manageVideos';

class Account extends Component {
    componentDidMount(){
        let localUser = window.localStorage.getItem('user');
        if(localUser !== null && this.props.user.user === null){
            this.props.login(JSON.parse(localUser));
        }
        if(this.props.videos.videos.length === 0){
            this.props.getVideos();
        }
    }

    render(){ 
   
        let { user, videos } = this.props;
        return (
            <div id='account' className='account'>
                <div id='account-info' className="card">
                    <div className='card-body'>
                        <h2 className="h2"> Your Info:</h2>
                        <h5 className="h5">Username: {user.user !== null ? user.user.username : ""}</h5>
                        <h5 className="h5">Email: {user.user !== null ? user.user.email : ""}</h5>
                    </div>
                </div>
                <h2 className="h2">Your Contributions:</h2>
                <PersonalVideos user={user} videos={videos}/>
                <br/>
                <div id='edit-form-container'>
                    <Link className="btn btn-dark" to='/account/edit'>Edit Account</Link>
                    <br/>
                    <Route path='/account/edit' >
                        <EditAccount id='edit' user={user} />
                    </Route>
                    <br/>
                    <Link className="btn btn-secondary" to='account/add'>New Video</Link>
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
export default connect(mapStateToProps, {login, getVideos})(Account);