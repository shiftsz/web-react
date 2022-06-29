import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import fetchEmployees from "../api/fetchEmployees";
import EmployeeTypes from "../types";

const fetchEmployeesAsync = createAsyncThunk(
    'employees/fetchAll',
    async () => await fetchEmployees()
)

export const fetchEmployeesAsyncBuilder = (builder: ActionReducerMapBuilder<EmployeeTypes.State>) => {
    builder
        .addCase(fetchEmployeesAsync.pending, (state) => {
            state.status = EmployeeTypes.Status.PENDING
        })
        .addCase(fetchEmployeesAsync.rejected, (state, action) => {
            state.status = EmployeeTypes.Status.REJECTED
        })

    return builder
}

export default fetchEmployeesAsync