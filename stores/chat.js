import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    chats: {},
    currentChat: {},
    isLoading: true
}

export const fetchChats = createAsyncThunk("chat/fetchChats", async (accesstoken) => {
    try {
        const token = "Bearer " + accesstoken
        const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/chats"
        const res = await axios.get(API_URL, {
            headers: { "authorization": token }
        })
        // await new Promise(resolve => setTimeout(resolve, 1000));
        if (res?.data?.success) return res?.data?.data
        return {
            readChats: [],
            unreadChats: []
        }
    } catch (error) {
        // console.log(error)
        return {
            readChats: [],
            unreadChats: []
        }
    }
})

export const { reducer, actions } = createSlice({
    name: "chat",
    initialState,
    reducers: {
        SetChat: (state, action) => {
            state.value = action.payload
        },
        SetIsLoading: (state, action) => {
            state.value = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchChats.fulfilled, (state, action) => {
            state.chats = action.payload
            state.isLoading = false
        })
    }
})