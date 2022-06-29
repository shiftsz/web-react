import { EntityId } from "@reduxjs/toolkit"
import { RootState } from "../.."
import { locationsAdapter } from "./slice"
import useSelector from "../../hooks/useSelector"

const selectLocations = (state: RootState) => state.locations

export const useAllLocations = () => locationsAdapter.getSelectors().selectAll(useSelector(selectLocations))

export const useLocation = (id: EntityId) => locationsAdapter.getSelectors().selectById(useSelector(selectLocations), id)
