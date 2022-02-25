import { all, call, put, takeLatest } from "redux-saga/effects";
import { processFileFailure, processFileSuccess } from "./import-file.actions";
import ImportFileActionTypes from "./import-file.types";

export function* processImportedData({payload : {importedData}}) {
    try {
        console.log(importedData);
        // filter per person
        // create collections: report > user/audition
        // insert to database
        yield put(processFileSuccess({reportData: importedData}))
    } catch (error) {
        yield put(processFileFailure({error: error}))
    }
}

export function* onProcessFile() {
    yield takeLatest(ImportFileActionTypes.OPEN_XLSX_FILE, processImportedData);
}

export function* importFileSagas() {
    yield all([
        call(onProcessFile)
    ])
}