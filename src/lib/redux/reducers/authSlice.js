import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { delay } from "../../../util"


const initState = {
    isLogin: false,
    isLoading: false
}

export const loginThunk = createAsyncThunk("auth/login", async () => {
    await delay(2000)
    return true
})

export const authSlice = createSlice({
    initialState: initState,
    name: 'auth',
    reducers: {
        logout: (state) => {
            state.isLogin = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginThunk.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLogin = action.payload
        })
    }
})

export const authReducer = authSlice.reducer