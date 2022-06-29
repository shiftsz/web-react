import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import LocationsTypes from "./types";

export const locationsAdapter = createEntityAdapter<LocationsTypes.Location>({
    selectId: (location) => location.id,
    sortComparer: (a, b) => a.meta?.displayOrder! - b.meta?.displayOrder!
})

const locationsSlice = createSlice({
    name: LocationsTypes.sliceName,
    initialState: locationsAdapter.getInitialState<LocationsTypes.State>({
        status: LocationsTypes.Status.IDLE
    }),
    reducers: {}
})

const { reducer: locationsReducer } = locationsSlice


export default locationsReducer