import TracklistActionTypes from "./tracklist.types"

export const fetchTracklistStart = barcode => ({
    type: TracklistActionTypes.FETCH_TRACKLIST_START,
    payload: barcode
})

export const fetchTidalDataStart = userAuth => ({
    type: TracklistActionTypes.FETCH_TIDAL_START,
    payload: userAuth
})

export const fetchTidalDataFailure = error => ({
    type: TracklistActionTypes.FETCH_TIDAL_FAILURE,
    payload: error
})

export const fetchTracklistSuccess = userTracklist => ({
    type: TracklistActionTypes.FETCH_TRACKLIST_SUCCESS,
    payload: userTracklist
})

export const fetchDataFailure = error => ({
    type: TracklistActionTypes.ERROR_FETCHING_DATA,
    payload: error
})