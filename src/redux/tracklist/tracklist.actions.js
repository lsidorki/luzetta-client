import TracklistActionTypes from "./tracklist.types"

export const fetchTracklistStart = barcode => ({
    type: TracklistActionTypes.FETCH_TRACKLIST_START,
    payload: barcode
})

export const fetchTracklistSuccess = userTracklist => ({
    type: TracklistActionTypes.FETCH_TRACKLIST_SUCCESS,
    payload: userTracklist
})

export const fetchDataFailure = error => ({
    type: TracklistActionTypes.ERROR_FETCHING_DATA,
    payload: error
})