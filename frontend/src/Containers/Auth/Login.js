import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendLogin, sendSignup } from '../../Reducers/user';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const { user } = useSelector(state => state.user);
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
        }, 500);
    }

    const handleSignup = (e) => {
        e.preventDefault();
       dispatch(sendSignup(
           {username: e.target.username.value, 
            email: e.target.email.value,
            password: e.target.password.value,
            password_confirmation: e.target.password_confirmation.value, 
            uuid: uuid()}
            ));
            setTimeout(() => {
                if(user.accepted === true){
                    window.alert("Account created, please sign in.");
                }
                else{
                    window.alert('There was a problem with your info, please try again.');
                }  
        }, 500)
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
export default Login;