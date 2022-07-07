import React from "react";
import Splash from "../../../../router/Splash";
import RootTypes from "../../../rootTypes";
import { useDispatch } from "../../../storeHooks";
import fetchAuthAsync from "../actions/fetchAuthAsync";
import { isAuthFetched, useAuthState } from "../authHooks";

const AuthProvider: React.FC<{ children: JSX.Element }> = (props) => {
    const state = useAuthState()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchAuthAsync())
    }, [dispatch])

    if (isAuthFetched(state))
        return props.children

    if (state.status === RootTypes.Status.IDLE) return <Splash />

    return <div>Loading</div>
}

export default AuthProvider