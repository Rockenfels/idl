import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import Footer from './Components/Display/Footer';
import NavBar from './Components/Display/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <AllUsers users={this.props.users}/>
        </Route>
        <Route path="/users/:user">
          <User {...this.props.match} user={this.props.users[this.props.match.params.user]}/>
        </Route>
        <Route path="/videos">
          <AllVideos />
        </Route>
        <Route path="/videos/:video">
          <VideoViewer video={this.props.match.params.video} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
  videos: state.videos,
  users: state.users
});

export default connect(mapStateToProps, { })(App);
