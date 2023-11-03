import { reducer as userReducer } from "./user";
import { reducer as chatReducer } from "./chat";
import { configureStore } from "@reduxjs/toolkit";

export function createStore(preloadedState = {}) {
    console.log("preleodedstate: ", preloadedState)
    const store = configureStore({
        reducer: {
            user: userReducer,
            chat: chatReducer,
        },
        preloadedState: preloadedState,
    });

    console.log("after:", store.getState().user)

    return store;
}

export const store = createStore();
