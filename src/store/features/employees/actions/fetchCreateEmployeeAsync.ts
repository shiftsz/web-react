import { createAsyncThunk } from "@reduxjs/toolkit";
import createEmployee from "../api/createEmployee";
import EmployeeTypes from "../types";

const createEmployeeAsync = createAsyncThunk<
    EmployeeTypes.Employee,
    EmployeeTypes.CreateEmployee.Input,
    {
        rejectValue: string
    }
>(
    'employee/create',
    async (input) => await createEmployee(input)
)

export default createEmployeeAsync