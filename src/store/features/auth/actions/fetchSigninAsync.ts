import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import fetchSignin from "../api/fetchSignin"
import AuthTypes from "../types"

const fetchSigninAsync = createAsyncThunk<
    AuthTypes.Payload,
    AuthTypes.Signin.Input,
    {
        rejectValue: AxiosError
    }
>(
    'auth/authorize',
    async (args, { rejectWithValue }) =>
        await fetchSignin(args)
            .catch(rejectWithValue)
)

export const fetchSigninAsyncBuilder = (builder: ActionReducerMapBuilder<AuthTypes.State>) => {
    builder
        .addCase(fetchSigninAsync.fulfilled, (state, action) => {
            state.status = AuthTypes.Status.FULFILLED
            state.payload = action.payload
        })

    return builder
}

export default fetchSigninAsync