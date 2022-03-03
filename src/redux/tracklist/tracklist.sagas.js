import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTracklistByBarcode } from "../../firebase/firebase.utils";
import { fetchDataFailure, fetchTracklistSuccess } from "./tracklist.actions";
import TracklistActionTypes from "./tracklist.types";

export function* fetchTracklist({payload: {barcode, report}}) {
    try {
        const tracklist = yield call(fetchTracklistByBarcode, barcode, report);
        yield put(fetchTracklistSuccess({tracks: tracklist}));
    } catch (error) {
        yield put(fetchDataFailure({error: error}))
    }
}

export function* onFetchTracklistStart() {
    yield takeLatest(TracklistActionTypes.FETCH_TRACKLIST_START, fetchTracklist)
}

export function* tracklistSagas() {
    yield all([
        call(onFetchTracklistStart)
    ])
}