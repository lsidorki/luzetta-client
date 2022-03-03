import { all, call } from "redux-saga/effects";
import { importFileSagas } from "./import-file/import-file.sagas";
import { fetchTracklistStart } from "./tracklist/tracklist.actions";
import { tracklistSagas } from "./tracklist/tracklist.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
        call(fetchTracklistStart),
        call(importFileSagas),
        call(userSagas),
        call(tracklistSagas)
    ]);
}