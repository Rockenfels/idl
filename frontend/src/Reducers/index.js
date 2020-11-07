import  manageUsers  from './manageUsers';
import manageVideos from './manageVideos';
import user from './user';
import { combineReducers } from 'redux';


export default combineReducers({
    users: manageUsers,
    videos: manageVideos,
    user
});
