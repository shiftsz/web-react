import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import RootTypes from "../../../rootTypes";
import { fetchSignoutRequest } from "../authApi";
import AuthTypes from "../authTypes";

const fetchSignoutAsync = createAsyncThunk(
    'auth/signout',
    async () => await fetchSignoutRequest()
)

export const fetchSignoutBuilder = (builder: ActionReducerMapBuilder<AuthTypes.State>) => {
    builder
        .addCase(fetchSignoutAsync.fulfilled, state => {
            return state = {
                status: RootTypes.Status.IDLE,
            }
        })
}

export default fetchSignoutAsync