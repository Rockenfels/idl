import { Component } from 'react';
import { connect } from 'react-redux';
import { sendLogin, sendSignup } from '../../Reducers/user';
import { v4 as uuid } from 'uuid';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        sendLogin({username: e.target.username.value, password: e.target.username.value})
            .then(this.props.user.accepted === true ? <Redirect to="/"/> : window.alert("There was a problem, make sure your info is correct and try again."));
    }

    handleSignup = (e) => {
        e.preventDefault();
        sendSignup({username: e.target.username.value, password: e.target.username.value, uuid: uuid()})
            .then(this.props.user.accepted === true ? window.alert("Account created, please sign in.") : window.alert('There was a problem with your info, please try something else.'))
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
const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps, {sendLogin, sendSignup})(Login);