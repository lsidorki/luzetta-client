import { all, call, put, takeLatest } from "redux-saga/effects";
import { importTracklist, registerNewReport } from "../../firebase/firebase.utils";
import { processFileFailure, processFileSuccess } from "./import-file.actions";
import ImportFileActionTypes from "./import-file.types";

export function* processImportedData({payload : {importedData}}) {
    try {
        const barcodes = new Set();
        const tracklist = new Set();
        importedData.map(data => {
            const {Autor_wpisu, Artist, Title, Album, Composer, Category, Runtime} = data;
            const lyricits = data['Writer/Lyricist'];
            barcodes.add(Autor_wpisu);
            tracklist.add({
                barcode: Autor_wpisu || '',
                artist: Artist || '',
                title: Title || '',
                album: Album || '',
                composer: Composer || '',
                category: Category || '',
                runtime: Runtime || '',
                lyricist: lyricits || ''
            });
            return tracklist;
        });
        
        if(barcodes.size < 1) {
            throw new Error("Could not find any entries. Ensure you have the correct file format.")
        }

        const reportRef = yield call(registerNewReport);
        if(reportRef) {
            yield call(importTracklist, tracklist, reportRef);
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