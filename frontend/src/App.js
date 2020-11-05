import React from 'react';
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
        <Route path="/users/:user">
          <User user={this.props.match.user}/>
        </Route>
        <Route path="/videos">
          <AllVideos/>
        </Route>
        <Route path="/videos/:video">
          <VideoViewer video={this.props.match.video} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;


/* IN CASE OF CONNECT - BREAK COMMENT!
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
  videos: state.videos,
  users: state.users
});

export default connect(mapStateToProps, { })(App);
*/
