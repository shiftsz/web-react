import { RootState } from "../../..";
import AuthTypes from "../types";

const authSelectors = (state: RootState) => {
    return {
        user: state.auth.payload?.user,
        loading: state.auth.status === AuthTypes.Status.PENDING,
        fetched: state.auth.status === AuthTypes.Status.FULFILLED || state.auth.status === AuthTypes.Status.REJECTED,
        token: state.auth.payload?.token!
    }
}

export default authSelectors