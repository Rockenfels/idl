import uuid from 'uuid';

export const login = (user) => {
    type: 'LOGIN',
    user
}

export const logout = () => {
    type: 'LOGOUT'
}

export const addUser = (user) => {
    type: "ADD_USER",
    user
}

export const removeUser = (user) => {
    type: "REMOVE_USER",
    user
}

export default function manageUsers(state={
    isLoggedIn: false,
    currentUserId: null,
    users: []
    }, action){

    //consider ading a logic statement to validate current user to both cases
    switch(action.type){
        case 'LOGIN':
            return {...state, isLoggedIn: true, currentUserId: action.user.id}
        case 'LOGOUT':
            return {...state, isLoggedIn: false, currentUserId: null}
        case 'ADD_USER':
            user.uid == uuid();
            return {...state, users:[...state.users, user]}
        case 'REMOVE_USER':
            return {...state, users: state.users.filter(user => user.uid !== user.uid)}
        default:
            return state;
    }
}