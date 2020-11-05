import uuid from 'uuid';

export const addVideo = (video) => {
    type: "ADD_VIDEO",
    video
}

export const removeVideo = (video) => {
    type: "REMOVE_VIDEO",
    video
}

export default function manageVideos(state={
    isLoggedIn: false,
    currentVideoId: null,
    videos: []
    }, action){

    //consider aDding a logic statement to validate current video to both cases
    switch(action.type){
        case 'ADD_VIDEO':
            video.uid == uuid();
            return {...state, videos:[...state.videos, video]}
        case 'REMOVE_VIDEO':
            return {...state, videos: state.videos.filter(item => item.uid !== video.uid)}
        default:
            return state;
    }
}