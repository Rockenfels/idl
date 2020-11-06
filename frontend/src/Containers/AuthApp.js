import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { logout } from '../Reducers/User';


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
              </Route>
              <Route path="/users/:user">
                <User {...this.props.match} user={this.props.users[this.props.match.params.user]}/>
              </Route>
              <Route path="/videos">
                <AllVideos />
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