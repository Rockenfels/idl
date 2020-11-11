import { Component } from 'react';
import { connect } from 'react-redux';
import AuthApp from './Containers/Auth/AuthApp';
import UnauthApp from './Containers/Auth/UnauthApp';
import { login } from './Reducers/user';

class App extends Component {
  componentDidMount(){
    let user = JSON.parse(window.localStorage.getItem('user'));
    if(user !== undefined){
      login(user);
    }
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
