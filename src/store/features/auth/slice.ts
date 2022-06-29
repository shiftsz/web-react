import { createSlice } from "@reduxjs/toolkit"
import { fetchAuthAsyncBuilder } from "./actions/fetchAuthAsync"
import { fetchSigninAsyncBuilder } from "./actions/fetchSigninAsync"
import AuthTypes from "./types"

const authSlice = createSlice({
    name: AuthTypes.sliceName,
    initialState: AuthTypes.initialState,
    reducers: {},
    extraReducers: (builder) => {
        fetchAuthAsyncBuilder(builder)
        fetchSigninAsyncBuilder(builder)
    }
})

const { reducer: authReducer } = authSlice

export default authReducer