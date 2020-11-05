import { Component } from 'react';
import { connect } from 'react-redux';
import { sendLogin, sendSignup } from '../Reducers/User';
import uuid from 'uuid';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        sendLogin({username: e.target.username.value, password: e.target.username.value})
    }

    handleSignup = (e) => {
        e.preventDefault();
        sendSignup({username: e.target.username.value, password: e.target.username.value, uuid: uuid()});
    }

    render() {
        return(
            <div className="login">
                <h1>Login Below:</h1>
                <form onSubmit={this.handleLogin}>
                    <input type="text" name="username" />
                    <input type="text" name="password" />
                    <input type="submit" value="Login" />
                </form>
                <h2>Or</h2>
                <h1>Signup:</h1>
                <form onSubmit={this.handleSignup}>
                    <input type="text" name="username" />
                    <input type="text" name="password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}
export default connect(null, {sendLogin, sendSignup})(Login);