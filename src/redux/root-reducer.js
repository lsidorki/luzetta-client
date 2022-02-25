import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import tracklistReducer from "./tracklist/tracklist.reducer"
import importXlsxReducer from "./import-file/import-file.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    importXlsx: importXlsxReducer,
    tracklist: tracklistReducer
})

export default persistReducer(persistConfig, rootReducer);