const url = 'http://localhost:3001/videos/'

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
});

export const removeVideo = (videoId) => ({
    type: "REMOVE_VIDEO",
    videoId
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

export const sendRemoveVideo = (videoId) => {
    return (dispatch) => {
        dispatch(pending);
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
          }

        fetch(url + videoId, configObj).then(response => response.json()).then(json => {
            if(json.message === 'Video Removed'){
            dispatch(accepted);
            dispatch(removeVideo(videoId));
            }
            else {
            dispatch(rejected);
            }
        });
    }
}

export const sendAddVideo = (video) => {
    return (dispatch) => {
        dispatch(pending);
        let formData = {
            video
          };
          let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          }

        fetch(url, configObj).then(response => response.json()).then(json => {
            if(json.message === 'Video Created'){
            dispatch(accepted);
            dispatch(addVideo(json.video));
            }
            else {
            dispatch(rejected);
            }
        });
    }
}

export default function manageVideos(state={
    videos: [], 
    pending: false, 
    accepted: false, 
    rejected: false
    }, action){

    switch(action.type){
        case 'ADD_VIDEO':
            return {videos:[...state.videos, action.video]}
        case 'POP_VIDEOS':
            return {videos: action.videos}
        case 'REMOVE_VIDEO':
            return {videos: state.videos.filter(item => item.uid !== action.videoId)}
        case 'ACCEPTED':
            return {...state, accepted: true, rejected: false, pending: false}
        case 'PENDING':
            return {...state, pending: true, accepted: false, rejected: false};
        case 'REJECTED':
            return {...state, rejected: true, accepted: false, pending: false};
        default:
            return state;
    }
}