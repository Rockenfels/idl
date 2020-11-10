import { Component } from 'react';
import { connect } from 'react-redux';
import AuthApp from './Containers/Auth/AuthApp';
import UnauthApp from './Containers/Auth/UnauthApp';
import { login } from './Reducers/user';

class App extends Component {
  componentDidMount(){
    let user = window.localStorage.getItem('user');
    user !== undefined ? this.props.login(user): null;
  }
  render(){
    return (
    <>
      {this.props.user.user !== undefined ? 
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

export default connect(mapStateToProps, {login})(App);
