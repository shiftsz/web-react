import { RootState } from "../..";
import { useSelector } from "../../storeHooks";
import AuthTypes from "./authTypes";

const selectAuth = (state: RootState) => state.auth

const isAuthenticated = (state: AuthTypes.State): state is AuthTypes.FulFilledState => state.status === AuthTypes.Status.FULFILLED

export const isAuthFetched = (state: AuthTypes.State): boolean => state.status === AuthTypes.Status.FULFILLED || state.status === AuthTypes.Status.REJECTED

export const useAuthState = () => useSelector(selectAuth)

export const useAuthUser = () => {
    const state = useAuthState()

    if (isAuthenticated(state)) return state.payload.user
}