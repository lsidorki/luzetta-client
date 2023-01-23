import TracklistActionTypes from "./tracklist.types";

const INITIAL_STATE = {
    userTracklist: null,
    isFetching: false,
    error: null
}

const tracklistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TracklistActionTypes.START_FETCHING_DISCOGS:
        case TracklistActionTypes.FETCH_TRACKLIST_START:
            return {
                ...state,
                error: null,
                isFetching: true
            }
        case TracklistActionTypes.SUCCESS_FETCHING_DATA: 
        case TracklistActionTypes.FETCH_TRACKLIST_SUCCESS:
            return {
                ...state,
                error: null,
                userTracklist: action.payload,
                isFetching: false
            }
        case TracklistActionTypes.ERROR_FETCHING_DATA:
        case TracklistActionTypes.FETCH_TIDAL_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default tracklistReducer;