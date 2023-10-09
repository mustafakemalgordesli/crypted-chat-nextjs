import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import getToken from "@/lib/getToken"

const initialState = {
    chats: {},
    currentChat: {},
    isLoading: true
}

export const fetchChats = createAsyncThunk("chat/fetchChats", async () => {
    console.log("burada")
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/chats", {
        headers: { authorization: "Bearer " + getToken() }
    })
    // await new Promise(resolve => setTimeout(resolve, 1000));
    if (res?.data?.success) return res.data.data
    return {}
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
        })
    }
})