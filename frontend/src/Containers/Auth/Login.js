import { Component } from 'react';
import { connect } from 'react-redux';
import { sendLogin, sendSignup } from '../../Reducers/user';
import { v4 as uuid } from 'uuid';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    handleLogin = (e) => {
        e.preventDefault();
        let user = ({username: e.target.username.value, 
            password: e.target.username.value 
        })
        this.props.sendLogin(user);
        setTimeout(() => {
            if(this.props.user.accepted === true){
                <Redirect to="/account"/>
            }
            else{
                window.alert("There was a problem, make sure your info is correct and try again.");
            }
        }, 5000);
    }

    handleSignup = (e) => {
        e.preventDefault();
        this.props.sendSignup({username: e.target.username.value, 
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value, 
            uuid: uuid()})
            setTimeout(() => this.props.user.accepted === true ? window.alert("Account created, please sign in.") : window.alert('There was a problem with your info, please try again.'), 5000)
    }

    render() {
        return(
            <div className="login">
                <h1>Login Below:</h1>
                <form onSubmit={this.handleLogin}>
                    <label for="username">Username: </label>
                    <input type="text" name="username" />
                    <label for="password">Password: </label>
                    <input type="password" name="password" />
                    <input type="submit" value="Login" />
                </form>
                <h2>Or</h2>
                <h1>Signup:</h1>
                <form onSubmit={this.handleSignup}>
                    <label for="username">Username: </label>
                    <input type="text" name="username" />
                    <label for="email">Email: </label>
                    <input type="text" name="email" />
                    <label for="password">Password: </label>
                    <input type="password" name="password" />
                    <label for="password-confirmation">Confirm Password: </label>
                    <input type="password" name="password-confirmation" />
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