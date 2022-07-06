import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch
} from "react-redux";
import {
    RootState,
    RootDispatch
} from ".";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const useDispatch = () => useReduxDispatch<RootDispatch>()