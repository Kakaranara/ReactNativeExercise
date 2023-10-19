import { combinedReducer } from './../reducers'
import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

// export const store = configureStore({
//     reducer: combinedReducer,
// })
export const store = configureStore({
    reducer : persistedReducer,
})

export const persistor = persistStore(store)