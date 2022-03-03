import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import tracklistReducer from "./tracklist/tracklist.reducer"
import importFileReducer from "./import-file/import-file.reducer"
import userReducer from "./user/user.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    importFile: importFileReducer,
    tracklist: tracklistReducer,
    user: userReducer
})

export default persistReducer(persistConfig, rootReducer);