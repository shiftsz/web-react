import { RootState } from "../..";
import RootTypes from "../../rootTypes";
import { useSelector } from "../../storeHooks";
import AuthTypes from "./authTypes";

const selectAuth = (state: RootState) => state.auth

const isAuthenticated = (state: RootTypes.State): state is AuthTypes.FulFilledState => state.status === RootTypes.Status.FULFILLED

export const isAuthFetched = (state: RootTypes.State): boolean => state.status === RootTypes.Status.FULFILLED || state.status === RootTypes.Status.REJECTED

export const useAuthState = () => useSelector(selectAuth)

export const useAuthUser = () => {
    const state = useAuthState()

    if (isAuthenticated(state)) return state.payload.user
}