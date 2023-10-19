import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";


export const combinedReducer = combineReducers({
    counter: counterReducer
})