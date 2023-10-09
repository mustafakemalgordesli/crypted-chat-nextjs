import { reducer as userReducer } from "./user";
import { reducer as chatReducer } from "./chat";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
    },
})

