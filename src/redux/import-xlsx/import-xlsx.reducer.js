import ImportXlsxActionTypes from './import-xlsx.types'

const INITIAL_STATE = {
    error: null
}

const importXlsxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ImportXlsxActionTypes.OPEN_XLSX_FILE:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default importXlsxReducer;