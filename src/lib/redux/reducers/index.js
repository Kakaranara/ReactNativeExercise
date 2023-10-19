import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { authReducer } from "./authSlice";


export const combinedReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
})