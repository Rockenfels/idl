import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendLogin, sendSignup } from '../../Reducers/user';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault();
        let login = ({username: e.target.username.value, 
            password: e.target.password.value 
        });
        dispatch(sendLogin(login));
        setTimeout(() => {
            if(user.user !== null){
                history.replace('/');
            }
            else{
                window.alert("There was a problem, make sure your info is correct and try again.");
            }
        }, 500);
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
            debugger;
            if(user.accepted){
                window.alert("Account sent to server, please try logging in.");
                document.getElementById('signup-username').value = "";
                document.getElementById('signup-email').value = "";
                document.getElementById('signup-password').value = "";
                document.getElementById('signup-password-confirmation').value = "";
            }
            else {
                window.alert("There was a problem, please try again.");
            }
            
        }, 1000)
    }

    
    return(
        <div className="login">
            <h1 className="h1">Login Below:</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="username">Username: </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="username" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="password">Password: </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="submit" className="form-control btn btn-primary" value="Login" />
                    </div>
                </div>
            </form>
            <br/>
            <h2 className="h2">-Or-</h2>
            <h1 className="h1">Signup:</h1>
            <br/>
            <form onSubmit={handleSignup}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="username">Username: </label>
                    <div className="col-sm-10">
                        <input className="form-control" id="signup-username" type="text" name="username" />
                    </div>
                </div>
                <div className="form-group row">  
                    <label className="col-sm-2 col-form-label" htmlFor="email">Email: </label>
                    <div className="col-sm-10">
                        <input className="form-control" id="signup-email" type="text" name="email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="password">Password: </label>
                    <div className="col-sm-10"> 
                        <input className="form-control" id="signup-password" type="password" name="password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="password-confirmation">Confirm Password: </label>
                    <div className="col-sm-10">   
                        <input className="form-control" id="signup-password-confirmation" type="password" name="password-confirmation" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="submit" className="form-control btn btn-primary" value="Create Account" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;