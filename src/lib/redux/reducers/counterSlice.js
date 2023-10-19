import { testThunk } from "./thunk"

const { createSlice } = require("@reduxjs/toolkit")


const initState = {
    value: 5,
    status: 'idle'
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        "increment": (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },
        incrementWithValue: (state, action) => {
            state.value += action.payload
        },
        incrementIfOdd: (state, action) => {
            if (state.value % 2 == 1) {
                state.value += action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(testThunk.pending, (state) => {
                state.status = "loading"
            })
            .addCase(testThunk.fulfilled, (state, action) => {
                state.status = "idle"
                state.value += action.payload
            })        
    }
})


const counterReducer =  counterSlice.reducer;

export {counterReducer, counterSlice}