import { v4 as uuid } from 'uuid';


export const addUser = (user) => ({
    type: "ADD_USER",
    user
});

export const popUsers = (users) => ({
    type: 'POP_USERS',
    users
});

export const removeUser = (user) => ({
    type: "REMOVE_USER",
    user
});

export const getUsers = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
                .then(json => {
                    dispatch(popUsers(json));        
                });
    };
};

function manageUsers(state={
    users: []
    }, action){

    switch(action.type){
        case 'LOGIN':
            return {...state, currentUserId: action.user.id}
        case 'LOGOUT':
            return {...state, currentUserId: null}
        case 'ADD_USER':
            action.user.uid = uuid();
            return {...state, users:[...state.users, action.user]}
        case 'POP_USERS':
            return {...state, users: action.users }
        case 'REMOVE_USER':
            return {...state, users: state.users.filter(user => user.uid !== action.user.uid)}
        default:
            return state;
    }
}
export default manageUsers;