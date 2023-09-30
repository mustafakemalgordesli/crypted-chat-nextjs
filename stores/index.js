import { reducer as userReducer } from "./user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})

