import { Component } from 'react';
import { connect } from 'react-redux';
import AuthApp from './Containers/Auth/AuthApp';
import UnauthApp from './Containers/Auth/UnauthApp';

class App extends Component {
  debugger;
  render(){
    return (
    <>
      {this.props.user !== null ? 
        <AuthApp /> : 
        <UnauthApp/>}
    </>
    );
  }
}
const mapStateToProps = (state) => ({
  videos: state.videos,
  users: state.users,
  user: state.user
});

export default connect(mapStateToProps, { })(App);
