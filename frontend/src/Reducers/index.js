import  manageUsers  from './manageUsers';
import manageVideos from './manageVideos';
import user from './User';
import { combineReducers } from 'redux';


export default combineReducers({
    users: manageUsers,
    videos: manageVideos,
    user
});
