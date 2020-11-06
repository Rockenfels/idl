import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { logout } from '../../Reducers/User';

//Component & Container Imports
import { AuthNavBar } from '../../Components/Display/AuthNavBar';
import { Home } from '../../Components/Display/Home';
import { AllUsers } from '../Users/AllUsers';
import { User } from '../../Components/Users/User';
import { AllVideos } from '../Videos/AllVideos';
import { VideoViewer } from '../../Components/Videos/VideoViewer';
import { NoMatch } from '../../Components/Display/NoMatch';
import { Footer } from '../../Components/Display/Footer'; 
class AuthApp extends Component{
    render(){
        return(
            <div className="app">
            <AuthNavBar logout={this.props.logout} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <AllUsers />
                <Route exact path={`${match.url}/:userId`} render={() => 
                    <User match={this.props.match} user={this.props.users.filter(user => user.uid === this.props.match.params.userId)} />}
                />
              </Route>
              <Route path="/users/:user">
                <User match={this.props.match} user={this.props.users.filter(user => user.uid === this.props.match.params.userId)}/>
              </Route>
              <Route path="/videos">
                <AllVideos match={this.props.match} />
              </Route>
              <Route path="/videos/:video">
                <VideoViewer video={this.props.videos[this.props.match.params.video]} />
              </Route>
              <Route path='/account'>
                  
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
export default connect(mapStateToProps,{logout})(AuthApp)