import { Component } from 'react';
import { connect } from 'react-redux';
import AuthApp from './Containers/Auth/AuthApp';
import UnauthApp from './Containers/Auth/UnauthApp';
import { login } from './Reducers/user';

class App extends Component {
  componentDidMount(){
    let user = window.localStorage.getItem('user');
    if(user !== null){
    this.props.login(JSON.parse(user));
    }
  }
  render(){
    return (
    <>
      {window.localStorage.getItem('user') !== null ? 
        <AuthApp className="container-fluid" /> : 
        <UnauthApp className="container-fluid"/>}
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
