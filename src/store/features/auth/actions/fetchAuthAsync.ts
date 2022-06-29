import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAuth from "../api/fetchAuth";
import AuthTypes from "../types";

const fetchAuthAsync = createAsyncThunk<
    AuthTypes.Payload,
    undefined,
    {
        rejectValue: string
    }
>(
    'auth/fetchAuth',
    async (args, { rejectWithValue }) =>
        await fetchAuth()
            .catch(error => {
                console.log(error)
                return rejectWithValue(error)
            })
)

export const fetchAuthAsyncBuilder = (builder: ActionReducerMapBuilder<AuthTypes.State>) => {
    builder
        .addCase(fetchAuthAsync.pending, (state) => {
            state.status = AuthTypes.Status.PENDING
        })
        .addCase(fetchAuthAsync.rejected, (state, action) => {
            console.log(action)
            state.status = AuthTypes.Status.REJECTED
            state.error = action.error
        })
        .addCase(fetchAuthAsync.fulfilled, (state, action) => {
            state.status = AuthTypes.Status.FULFILLED
            state.payload = action.payload
        })

    return builder
}

export default fetchAuthAsync