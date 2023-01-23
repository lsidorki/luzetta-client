import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTracklistByBarcode } from "../../firebase/firebase.utils";
import { Tidal2Api } from "../../tidal/tidal.utils";
import { fetchDataFailure, fetchTidalDataFailure, fetchTracklistSuccess } from "./tracklist.actions";
import TracklistActionTypes from "./tracklist.types";

export function* fetchTracklist({payload: {barcode, report}}) {
    try {
        const tracklist = yield call(fetchTracklistByBarcode, barcode, report);
        yield put(fetchTracklistSuccess({tracks: tracklist}));
    } catch (error) {
        yield put(fetchDataFailure({error: error}))
    }
}

export function* fetchTidalData({payload: {username, password, token}}) {
    try {
        console.log("Start fetching Tidal Data Saga.");
        const api = new Tidal2Api(username, password, token);
        api.search("hej");
    } catch (error) {
        yield put(fetchTidalDataFailure({error}))
    }
}

export function* onFetchTracklistStart() {
    yield takeLatest(TracklistActionTypes.FETCH_TRACKLIST_START, fetchTracklist)
}

export function* onFetchTidalStart() {
    yield takeLatest(TracklistActionTypes.FETCH_TIDAL_START, fetchTidalData)
}

export function* tracklistSagas() {
    yield all([
        call(onFetchTracklistStart),
        call(onFetchTidalStart)
    ])
}