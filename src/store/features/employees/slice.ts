import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import createEmployeeAsync from "./actions/fetchCreateEmployeeAsync";
import fetchEmployeesAsync, { fetchEmployeesAsyncBuilder } from "./actions/fetchEmployeesAsync";
import EmployeeTypes from "./types";

export const employeesAdapter = createEntityAdapter<EmployeeTypes.Employee>({
    selectId: (employee) => employee.id,
    sortComparer: (a, b) => a.forename.localeCompare(b.forename)
})

const employeesSlice = createSlice({
    name: EmployeeTypes.sliceName,
    initialState: employeesAdapter.getInitialState<EmployeeTypes.State>({
        status: EmployeeTypes.Status.IDLE,
    }),
    reducers: {},
    extraReducers: (builder) => {
        fetchEmployeesAsyncBuilder(builder)

        builder
            .addCase(fetchEmployeesAsync.fulfilled, (state, action) => {
                state.status = EmployeeTypes.Status.FULFILLED
                employeesAdapter.setAll(state, action.payload)
            })
            .addCase(createEmployeeAsync.fulfilled, (state, action) => {
                employeesAdapter.addOne(state, action.payload)
            })
    }
})

const { reducer: employeesReducer } = employeesSlice

export default employeesReducer