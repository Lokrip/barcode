import {
    asyncThunkCreator,
    buildCreateSlice,
    combineSlices,
} from "@reduxjs/toolkit";

export const rootReducer = combineSlices();
export const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});
