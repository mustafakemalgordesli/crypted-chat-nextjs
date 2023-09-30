import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    chats: [],
    currentChat: {},
}

export const fetchChats = createAsyncThunk("chat/fetchChats", async () => {
    console.log("chats fetch")
    return Promise.resolve({ id: 1, username: "faya23", email: "usertwo@gmail.com" })
})

export const { reducer, actions } = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            state.chats = action.payload
        })
    }
})