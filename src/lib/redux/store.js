const { configureStore } = require("@reduxjs/toolkit");
const { counterSlice } = require("./counterSlice");

const store = configureStore({
    reducer : {
        counter: counterSlice.reducer
    },
})

export {store}


