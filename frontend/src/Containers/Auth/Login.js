import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendLogin, sendSignup } from '../../Reducers/user';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        let login = ({username: e.target.username.value, 
            password: e.target.username.value 
        });
        dispatch(sendLogin(login));
        setTimeout(() => {
            if(window.localStorage.getItem('user') !== null){
                history.push('/account');
            }
            else{
                window.alert("There was a problem, make sure your info is correct and try again.");
            }
        }, 1000);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        let username = document.getElementById('signup-username').value;
        let email = document.getElementById('signup-email').value;
        let pass = document.getElementById('signup-password').value;
        let passConf = document.getElementById('signup-password-confirmation').value;

       dispatch(sendSignup(
           {username: username, 
            email: email,
            password: pass,
            password_confirmation: passConf, 
            uid: uuid()}
            ));

        setTimeout(() => {
                window.alert("Account sent to server, please try logging in.");
                document.getElementById('signup-username').value = "";
                document.getElementById('signup-email').value = "";
                document.getElementById('signup-password').value = "";
                document.getElementById('signup-password-confirmation').value = "";
            
        }, 1000)
    }

    
    return(
        <div className="login">
            <h1>Login Below:</h1>
            <form onSubmit={handleLogin}>
                <label for="username">Username: </label>
                <input type="text" name="username" />
                <label for="password">Password: </label>
                <input type="password" name="password" />
                <input type="submit" value="Login" />
            </form>
            <h2>Or</h2>
            <h1>Signup:</h1>
            <form onSubmit={handleSignup}>
                <label for="username">Username: </label>
                <input id="signup-username" type="text" name="username" />
                <label for="email">Email: </label>
                <input id="signup-email" ype="text" name="email" />
                <label for="password">Password: </label>
                <input id="signup-password" type="password" name="password" />
                <label for="password-confirmation">Confirm Password: </label>
                <input id="signup-password-confirmation" type="password" name="password-confirmation" />
                <input type="submit" value="Create Account" />
            </form>
        </div>
    )
}
export default Login;