import ImportFileActionTypes from "./import-file.types";

export const openFileStart = reportData => ({
    type: ImportFileActionTypes.OPEN_XLSX_FILE,
    payload: reportData
})

export const processFileSuccess = reportData => ({
    type: ImportFileActionTypes.PROCESS_FILE_SUCCESS,
    payload: reportData
})

export const processFileFailure = error => ({
    type: ImportFileActionTypes.PROCESS_FILE_FAILURE,
    payload: error
})