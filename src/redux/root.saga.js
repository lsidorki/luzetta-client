import { all, call } from "redux-saga/effects";
import { importFileSagas } from "./import-file/import-file.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
        call(importFileSagas),
        call(userSagas)
    ]);
}