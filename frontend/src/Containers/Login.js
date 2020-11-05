import { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../Reducers/User';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" />
                <input type="text" name="password" />
                <input type="submit" value="Login" />
            </form>
        )
    }

}
export default connect(null, {login})(Login);