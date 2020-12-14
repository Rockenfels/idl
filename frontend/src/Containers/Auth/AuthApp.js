import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { logout } from '../../Reducers/User';

//Component & Container Imports
import AuthNavBar from '../../Components/Display/AuthNavBar';
import Home from '../../Components/Display/Home';
import AllUsers from '../Users/AllUsers';
import User from '../../Components/Users/User';
import AllVideos from '../../Components/Videos/AllVideos';
import VideoSearch from '../../Components/Videos/VideoSearch';
import VideoViewer from '../../Components/Videos/VideoViewer';
import NoMatch from '../../Components/Display/NoMatch';
import Account from '../Users/Account'
import Footer from '../../Components/Display/Footer'; 
import { getUsers } from '../../Reducers/manageUsers';
import { getVideos } from '../../Reducers/manageVideos';

class AuthApp extends Component{
  componentDidMount(){
    this.props.getUsers();
    this.props.getVideos();
  }
  render(){
    let { users } = this.props;
    let { videos } = this.props;
    return(
        <div className="auth-app">
        <AuthNavBar logout={this.props.logout} />
        <Switch>
          <Route exact="true" path="/">
            <Home />
          </Route>

          <Route path="/users">
            <div id="auth-users">
              <AllUsers users={this.props.users} />
              <Route path="/users/:userId" >
                <User users={users} />
              </Route>
            </div>
          </Route>

          <Route path="/users/:userId" >
            <User />
          </Route>

          <Route path={`/videos`} >
            <AllVideos videos={videos} />
          </Route>

          <Route path="/videos/:video">

            <VideoViewer videos={videos} />
          </Route>

          <Route path={'/search'}>
            <VideoSearch videos={videos}/>
          </Route>

          <Route path='/account'>
              <Account videos={videos} />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    videos: state.videos,
    users: state.users,
    user: state.user
})
export default connect(mapStateToProps,{logout, getUsers, getVideos})(AuthApp)