import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import RootTypes from "../../../rootTypes";
import { fetchAuthRequest } from "../authApi";
import AuthTypes from "../authTypes";

const fetchAuthAsync = createAsyncThunk(
    'auth/fetchAuth',
    async () => await fetchAuthRequest()
)

export const fetchAuthBuilder = (builder: ActionReducerMapBuilder<AuthTypes.State>) => {
    builder
        .addCase(fetchAuthAsync.pending, state => {
            return state = {
                status: RootTypes.Status.PENDING
            }
        })
        .addCase(fetchAuthAsync.fulfilled, (state, action) => {
            return state = {
                status: RootTypes.Status.FULFILLED,
                payload: action.payload
            }
        })
        .addCase(fetchAuthAsync.rejected, (state, action) => {
            return state = {
                status: RootTypes.Status.REJECTED,
                error: action.error
            }
        })
}

export default fetchAuthAsync