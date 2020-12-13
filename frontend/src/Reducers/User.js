const url = 'http://localhost:3001/auth/';

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

// Dispatched action for async login request to RoR backend
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

        // Declare variables for header storage
        const client = undefined;
        const accessToken = undefined;
        const uid = undefined;

        // Send login request and store client/token headers for auth
        fetch(url + "sign_in", configObj).then(response => {
            client = response.headers.get('client');
            accessToken = response.headers.get('access-token');
            uid = response.headers.get('uid');
            response.json();
        }).then(json => {
            if(uid !== undefined && accessToken !== undefined){
                window.localStorage.setItem( 'uid', JSON.stringify(uid));

                const loginInfo = {
                    client,
                    'access-token': accessToken,
                    uid
                };
                dispatch(login(loginInfo));
              }
            else {
                dispatch(rejected);
            }
        });
    }
}

export const sendSignup = (user) => {
    return (dispatch) => {
        dispatch(pending);
        let formData = {
            user
          };
          let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          };
      
          fetch(url, configObj).then(response => response.json()).then(json => {
              console.log(json)
              if(json.message === 'User Created'){
                dispatch(signup);
            }
               else {
                dispatch(rejected);
            }
          });
    }
}


export const signup = () => ({
    type: 'SIGNUP'
})

export default function user(state={
    user: null, 
    pending: false, 
    accepted: false, 
    rejected: false
}, action){

    switch(action.type){
        case 'LOGIN':
            return {user: action.user, accepted: true, pending: false, rejected: false};
        case 'LOGOUT':
            window.localStorage.removeItem('user');
            return {...state, user: undefined, accepted: true}
        case 'ACCEPTED':
            return {...state, accepted: true, rejected: false, pending: false}
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        case 'SIGNUP':
            return {...state, accepted: true}
        default:
            return state;
    }
}