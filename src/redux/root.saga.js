import { all, call } from "redux-saga/effects";
import { importFileSagas } from "./import-file/import-file.sagas";

export default function* rootSaga() {
    yield all([
        call(importFileSagas)
    ]);
}