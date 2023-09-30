import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import getToken from "@/lib/getToken"

const initialState = {
    user: {}
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    console.log("user fetch")
    // const token = getToken()
    const user = await fetch()
    return Promise.resolve({ id: 1, username: "faya23", email: "usertwo@gmail.com" })
})

export const { reducer, actions } = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})