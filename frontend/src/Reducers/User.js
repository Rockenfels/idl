const url = 'http://localhost:3001/users/';

export const login = (user) => ({
    type: 'LOGIN',
    user
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
          }

          fetch(url + "login", configObj).then(response => response.json()).then(json => {
              if(json.message === 'User Found'){
                dispatch(accepted);
                window.localStorage.setItem( 'user', JSON.stringify(json.user))
                dispatch(login(json.user));
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
      
          fetch(url + "signup", configObj).then(response => response.json()).then(json => {
              if(json.message === 'User Created'){
                dispatch(accepted);
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
            user
          };
          let configObj = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          };
      
          fetch(url + user.id, configObj).then(response => response.json()).then(json => {
              if(json.message === 'User Updated'){
                  dispatch(editUser(user));
                  dispatch(accepted);
              }
              else{
                  dispatch(rejected);
              }
          });
    }
}

export const editUser = (user) => ({
    type: 'EDIT_USER',
    user
})

export default function user(state={
    user: undefined, 
    pending: false, 
    accepted: false, 
    rejected: false
}, action){

    switch(action.type){
        case 'LOGIN':
            return {user: action.user, accepted: true, pending: false, rejected: false};
        case 'LOGOUT':
            window.localStorage.setItem('user', undefined);
            return {...state, user: undefined}
        case 'ACCEPTED':
            return {...state, accepted: true, rejected: false, pending: false}
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        case 'EDIT_USER':
            return {...state, user: action.user}
        default:
            return state;
    }
}