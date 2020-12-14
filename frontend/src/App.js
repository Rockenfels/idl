import { Component } from 'react';
import { connect } from 'react-redux';
import AuthApp from './Containers/Auth/AuthApp';
import UnauthApp from './Containers/Auth/UnauthApp';
import { login } from './Reducers/User';

class App extends Component {
  componentDidMount(){
    let user = window.localStorage.getItem('user');
    if(user !== null){
    this.props.login(JSON.parse(user));
    }
  }
  render(){
    return (
    <div id="app" >
      {window.localStorage.getItem('user') !== null ? 
        <AuthApp className="container-fluid" /> : 
        <UnauthApp className="container-fluid"/>}
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
  videos: state.videos,
  users: state.users,
  user: state.user
});

export default connect(mapStateToProps, {login})(App);
