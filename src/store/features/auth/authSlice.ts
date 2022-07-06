import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthAsync, fetchSignoutAsync } from "./authActions";
import AuthTypes from "./authTypes";

const authSlice = createSlice<AuthTypes.State, {}>({
    name: 'auth',
    initialState: {
        status: AuthTypes.Status.IDLE
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthAsync.pending, state => {
                return state = {
                    status: AuthTypes.Status.PENDING
                }
            })
            .addCase(fetchAuthAsync.fulfilled, (state, action) => {
                return state = {
                    status: AuthTypes.Status.FULFILLED,
                    payload: action.payload
                }
            })
            .addCase(fetchAuthAsync.rejected, (state, action) => {
                return state = {
                    status: AuthTypes.Status.REJECTED,
                    error: action.error,
                    reason: action.error.message!
                }
            })
            .addCase(fetchSignoutAsync.fulfilled, state => {
                return state = {
                    status: AuthTypes.Status.IDLE,
                }
            })
    }
})

const { reducer: authReducer } = authSlice

export default authReducer