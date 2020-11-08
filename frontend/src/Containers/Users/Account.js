import { Component } from 'react'
import { connect } from 'react-redux';
import PersonalVideos from '../Videos/PersonalVideos';
import EditAccount from './EditAccount';
import { Link, Route } from 'react-router-dom';


class Account extends Component {

    render(){    
        return (
            <div id='account' className='account'>
                <h2>Your Contributions:</h2>
                <PersonalVideos user={this.props.user} />
                <div id='edit-form-container'>
                    <Link to='/account/edit'>Edit Account</Link>
                    <Route path='/account/edit' >
                        <EditAccount id='edit' user={this.props.user} style={{display: 'none'}}/>
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