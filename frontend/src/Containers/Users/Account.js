import { Component } from 'react'
import { connect } from 'react-redux';
import PersonalVideos from '../Videos/PersonalVideos';
import EditAccount from './EditAccount';
import { Link, Route } from 'react-router-dom';
import AddVideo from '../Videos/AddVideo';

class Account extends Component {

    render(){    
        let { user, videos } = this.props;
        return (
            <div id='account' className='account'>
                <h2>Your Contributions:</h2>
                <PersonalVideos user={user} videos={videos}/>
                <div id='edit-form-container'>
                    <Link to='/account/edit'>Edit Account</Link>
                    <Route path='/account/edit' >
                        <EditAccount id='edit' user={user} />
                    </Route>
                    <Link to='account/add'>New Video</Link>
                    <Route path='/account/add' >
                        <AddVideo id='add' user={user} />
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
export default connect(mapStateToProps, {})(Account);