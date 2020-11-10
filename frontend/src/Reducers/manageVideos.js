import { v4 as uuid } from 'uuid';

export const getVideos = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/videos')
            .then(response => response.json())
                .then(json => {
                    dispatch(popVideos(json));        
                });
    };
};

export const popVideos = (videos) => ({
    type: 'POP_VIDEOS',
    videos
});

export const addVideo = (video) => ({
    type: "ADD_VIDEO",
    video
})

export const removeVideo = (video) => ({
    type: "REMOVE_VIDEO",
    video
})

export default function manageVideos(state={
    videos: []
    }, action){

    //consider aDding a logic statement to validate current video to both cases
    switch(action.type){
        case 'ADD_VIDEO':
            action.video.uid = uuid();
            return {...state, videos:[...state.videos, action.video]}
        case 'POP_VIDEOS':
            return {videos: action.videos}
        case 'REMOVE_VIDEO':
            return {...state, videos: state.videos.filter(item => item.uid !== action.video.uid)}
        default:
            return state;
    }
}