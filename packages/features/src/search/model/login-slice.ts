import { rootReducer } from "@packages/redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SearchState } from "./state.ts";

export const initialState: SearchState = {
    query: null,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    selectors: {
        getSearchQuery: (state) => state.query,
    },
    reducers: {
        setSearch: (state, action: PayloadAction<{ query: string }>) => {
            state.query = action.payload.query;
        },
    },
}).injectInto(rootReducer, {
    reducerPath: "search",
})

export const searchSelectors = searchSlice.selectors;
export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
