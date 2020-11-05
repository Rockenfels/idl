const url = 'http://localhost:3000/';

export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const pending = () => ({
    type: 'PENDING'
})

export const rejected = () => ({
    type: 'REJECTED'
})

export const sendLogin = (user) => {
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
      
          fetch(url + "login", configObj).then(response => response.json()).then(json => {
              json.message === 'User Found' ? dispatch(login(json.user)) : dispatch(rejected);
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
      
          fetch(url + "signup", configObj).then(response => response.json()).then(json => {
              json.message === 'User Created' ? window.alert('user created, please sign in') : window.alert('Invalid data or user already exists. Try again.');
          });
    }
}

export const logout = () => ({
    type: 'LOGOUT'
}) 

export default function user(state={user: null, pending: false, accepted: false, rejected: false}, action){
    switch(action.type){
        case 'LOGIN':
            return {user: action.user, accepted: true, pending: false, rejected: false};
        case 'LOGOUT':
            return {...state, user: null}
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        default:
            return state;
    }
}