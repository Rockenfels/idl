import { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { login } from '../../Reducers/user';

//Component & Container Imports
import UnauthNavBar from '../../Components/Display/UnauthNavBar';
import Home from '../../Components/Display/Home';
import AllUsers from '../Users/AllUsers';
import User from '../../Components/Users/User';
import AllVideos from '../Videos/AllVideos';
import VideoViewer from '../../Components/Videos/VideoViewer';
import NoMatch from '../../Components/Display/NoMatch';
import Footer from '../../Components/Display/Footer'; 
class UnauthApp extends Component{
    render(){
        return(
            <div className="app">
            <UnauthNavBar login={this.props.login} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/users"render={(routerProps) => {
                <div id="auth-users">
                  <AllUsers {...routerProps} />
                  <Route path={`/users/:userId`} render={(routerProps) => 
                      <User match={routerProps.match} user={this.props.users.find(user => user.uid === routerProps.match.params.userId)} />}
                  />
                </div>
              }}/>
              
              <Route path={`/users/:userId`} render={(routerProps) => 
                                    <User match={routerProps.match} user={this.props.users.find(user => user.uid === routerProps.match.params.userId)} />}
                            />

              <Route path="/videos" render={(routerProps) => {
                <AllVideos match={routerProps.match} />
              }}/>

              <Route path="/videos/:video" render={(routerProps) => {
                  <VideoViewer video={this.props.videos.find(target => target.uid === routerProps.match.params.video)} />
              }}/>

              <Route path='/login'>
                  <Login />
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
    users: state.users
})
export default connect(mapStateToProps,{logout})(UnauthApp)