import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuthRequest, fetchSignoutRequest } from "./authApi";

export const fetchAuthAsync = createAsyncThunk(
    'auth/fetchAuth',
    async () => await fetchAuthRequest()
)

export const fetchSignoutAsync = createAsyncThunk(
    'auth/signout',
    async () => await fetchSignoutRequest()
)