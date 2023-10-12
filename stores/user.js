import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import getToken from "@/lib/getToken"

const initialState = {
    user: {}
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const token = getToken()
    if (!token) return {}
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/users/getbytoken", {
        headers: { authorization: "Bearer " + token }
    })
    if (res?.data?.success) return res.data.data
    return {}
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