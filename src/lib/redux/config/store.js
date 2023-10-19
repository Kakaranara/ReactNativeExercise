import { combinedReducer } from './../reducers'
import { configureStore } from '@reduxjs/toolkit'
// const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: combinedReducer,
})

