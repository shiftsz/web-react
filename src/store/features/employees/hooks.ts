import { EntityId } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../.."
import { employeesAdapter } from "./slice"

const selectEmployees = (state: RootState) => state.employees

export const useAllEmployees = () => employeesAdapter.getSelectors().selectAll(useSelector(selectEmployees))

export const useEmployee = (id: EntityId) => employeesAdapter.getSelectors().selectById(useSelector(selectEmployees), id)