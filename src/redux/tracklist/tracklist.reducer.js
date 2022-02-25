import TracklistActionTypes from "./tracklist.types";

const INITIAL_STATE = {
    tracklist: null,
    error: null
}

const tracklistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TracklistActionTypes.START_FETCHING_DISCOGS:
            return {
                ...state,
                error: null
            }
        case TracklistActionTypes.SUCCESS_FETCHING_DATA:
            return {
                ...state,
                error: null,
                tracklist: action.payload
            }
        case TracklistActionTypes.ERROR_FETCHING_DATA:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default tracklistReducer;