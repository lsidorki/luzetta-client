import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
})

export default persistReducer(persistConfig, rootReducer);