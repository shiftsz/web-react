import { createSlice } from "@reduxjs/toolkit";
import RootTypes from "../../rootTypes";
import { fetchAuthBuilder } from "./actions/fetchAuthAsync";
import { fetchSignoutBuilder } from "./actions/fetchSignoutAsync";
import AuthTypes from "./authTypes";

const authSlice = createSlice<AuthTypes.State, {}>({
    name: 'auth',
    initialState: {
        status: RootTypes.Status.IDLE
    },
    reducers: {},
    extraReducers: (builder) => {
        fetchAuthBuilder(builder)
        fetchSignoutBuilder(builder)
    }
})

export { authSlice }

const { reducer: authReducer } = authSlice

export default authReducer