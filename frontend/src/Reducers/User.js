const url = 'http://localhost:3001/auth/';

// Basic actions for various user states
// Stores validated user uid, token, and client into redux store
export const login = (loginInfo) => ({
    type: 'LOGIN',
    loginInfo
});

// Clears user info from store
export const logout = () => ({
    type: 'LOGOUT'
});

// Updates store with updated acct info
export const editUser = (user) => ({
    type: 'EDIT_USER',
    user
})

// Actions used to denote async status
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

                window.localStorage.setItem( 'user', JSON.stringify(user));

                dispatch(login(user));
            }
            else {
                dispatch(rejected);
            }
        });
    }
}

export const sendEdit = (user) => {
    return (dispatch) => {

        dispatch(pending);
    
        let formData = {
            username: user.username,
            email: user.email,
        };

        let localUser = JSON.parse(window.localStorage.getItem('user'));

        // Retrieve variables for storage
        const client = localUser.client;
        const accessToken = localUser.accessToken;
        const uid = localUser.uid;
        const expiry = localUser.expiry;

        let configObj = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                client,
                'access-token': accessToken,
                uid,
                expiry
            },
            body: JSON.stringify(formData)
        };

      
        fetch(url, configObj).then(response => response.json()).then(json => {
            if(json.message === 'User Updated'){
                window.localStorage.setItem('user', JSON.stringify(json.user));
                dispatch(editUser(json.user));
                dispatch(accepted);
            }
            else{
                dispatch(errors(json.errors))
                dispatch(rejected);
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
            return {...state, user: undefined, accepted: true};
        case 'ACCEPTED':
            return {...state, accepted: true, rejected: false, pending: false};
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        case 'EDIT_USER':
            return {...state, user: action.user};
        case 'SIGNUP':
            return {...state, accepted: true};
        case 'ERRORS':
            return {...state, errors: action.errors}
        default:
            return state;
    }
}