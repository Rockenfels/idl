const url = 'http://localhost:3001/auth/';

// Basic actions for various user states
export const signup = () => ({
    type: 'SIGNUP'
})

export const login = (loginInfo) => ({
    type: 'LOGIN',
    loginInfo
});

export const logout = () => ({
    type: 'LOGOUT'
}); 

export const pending = () => ({
    type: 'PENDING'
});

export const rejected = () => ({
    type: 'REJECTED'
});

export const accepted = () => ({
    type: 'ACCEPTED'
});

export const errors = (errors) => ({
    type: 'ERRORS',
    errors
})

// Dispatched action for async signup request to RoR backend and sets anync status to pending
export const sendSignup = (user) => {
    return (dispatch) => {
        dispatch(pending);

        let formData = {
            email,
            password
          };

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        };

        // Declare variable for successful signup check or errors if signup fails
        const uid = undefined;
        const errs = undefined;

        fetch(url, configObj).then(response => {

            // Assigns uid from response headers
            uid = response.headers.get('uid');
            errs = response.headers.get('errors');

            response.json()
        }).then(json => {
            
            if(uid !== undefined){
                dispatch(accepted);
            }
            else {
                dispatch(errors(errs));
                dispatch(rejected);
            }
        });
    }
}

// Dispatched action for async login request to RoR backend and sets anync status to pending
export const sendLogin = (user) => {
    return (dispatch) => {

        dispatch(pending);

        let formData = {
            email: user.email,
            password: user.password
          };

        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        // Declare variables for storage
        const client = undefined;
        const accessToken = undefined;
        const uid = undefined;
        const expiry = undefined;

        // Send login request and store client/token headers for auth
        fetch(url + "sign_in", configObj).then(response => {

            // Assign variables from response headers
            client = response.headers.get('client');
            accessToken = response.headers.get('access-token');
            uid = response.headers.get('uid');
            expiry = response.headers.get('expiry');

            response.json();
        }).then(json => {
            if(uid !== undefined && accessToken !== undefined){

                // Declare user object for localStorage
                const user = {
                    uid,
                    accessToken,
                    client,
                    expiry,
                    email: user.email
                }

                // Stores validated user info, headers, and token 
                window.localStorage.setItem( 'user', JSON.stringify(user));
                dispatch(login(user));
            }
            else {
                dispatch(rejected);
            }
        });
    }
}

// Dispatched action for async login request to RoR backend and sets anync status to pending
export const sendLogout = () => {
    return (dispatch) => {

        dispatch(pending);

        let user = JSON.parse(window.localStorage.getItem('user'));

        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "uid": user.uid,
                "access-token": user.accessToken,
                "client": user.client
            },
        }

        // Send login request and store client/token headers for auth
        fetch(url + "sign_out", configObj).then(response => response.json()).then(json => {
            if(json.success === true){

                // Clear local and redux storage
                dispatch(logout());
            }
        });
    }
}

export default function user(state={
    user: null, 
    pending: false, 
    accepted: false, 
    rejected: false,
    errors: []
}, action){

    switch(action.type){
        case 'LOGIN':
            return {user: action.user, accepted: true, pending: false, rejected: false};
        case 'LOGOUT':
            window.localStorage.clear();
            return {...state, user: undefined};
        case 'ACCEPTED':
            return {...state, accepted: true, rejected: false, pending: false}
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        case 'SIGNUP':
            return {...state, accepted: true};
        case 'ERRORS':
            return {...state, errors: action.errors};
        default:
            return state;
    }
}