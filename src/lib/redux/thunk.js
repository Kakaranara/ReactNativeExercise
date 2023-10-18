const { createAsyncThunk } = require("@reduxjs/toolkit");


export const testThunk = createAsyncThunk("counter/increment", async (number) => {
    await delay(2000)

    return number
})

async function delay(number){
    return new Promise(resolve => setTimeout(resolve, number))
}