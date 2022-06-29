import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./features/auth/slice";
import employeesReducer from "./features/employees/slice";
import locationsReducer from "./features/locations/slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        employees: employeesReducer,
        locations: locationsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store