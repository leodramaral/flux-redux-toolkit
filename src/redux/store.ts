import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
import { persistStore, persistReducer } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducer from "./rootReducer";

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: { 
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;

store.subscribe(() => {
    console.log('Store updated:', store.getState());
});
