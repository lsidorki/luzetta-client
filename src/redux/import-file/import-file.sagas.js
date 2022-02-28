import { all, call, put, takeLatest } from "redux-saga/effects";
import { processFileFailure, processFileSuccess } from "./import-file.actions";
import ImportFileActionTypes from "./import-file.types";

export function* processImportedData({payload : {importedData}}) {
    try {
        console.log(importedData);
        const barcodes = new Set();
        console.log(importedData.includes("Autor_Wpisu"));
        importedData.map(data => {
            barcodes.add(data.Autor_wpisu);
            return barcodes;
        });
        console.log(barcodes);
        if(barcodes.size < 1) {
            throw new Error("Could not find any entries. Endure you have the correct file format.")
        }

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