import React from "react";
import { useDispatch } from "../../../storeHooks";
import { fetchAuthAsync } from "../authActions";
import { isAuthFetched, useAuthState } from "../authHooks";
import AuthTypes from "../authTypes";

const AuthProvider: React.FC<{ children: JSX.Element }> = (props) => {
    const state = useAuthState()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchAuthAsync())
    }, [dispatch])

    if (state.status === AuthTypes.Status.IDLE) return props.children

    if (!isAuthFetched(state)) return <div>Loading</div>

    return props.children
}

export default AuthProvider