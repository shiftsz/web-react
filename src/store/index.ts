import { combineReducers, configureStore, PreloadedState } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const rootReducer = combineReducers({
    auth: authReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>

export type RootDispatch = AppStore['dispatch']

export default store