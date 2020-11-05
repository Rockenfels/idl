export const login = (user) => ({
    type: 'LOGIN',
    user
});

export const logout = () => ({
    type: 'LOGOUT'
}) 

export default function user(state=null, action){
    switch(action.type){
        case 'LOGIN':
            return ({user: action.user});
        case 'LOGOUT':
            return null
        default:
            return state;
    }
}