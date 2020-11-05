import { manageUsers } from './manageUsers';
import { manageVideos } from './manageVideos';
import { combineReducers } from 'react-redux';

export default combineReducers({
    users: manageUsers,
    videos: manageVideos
});