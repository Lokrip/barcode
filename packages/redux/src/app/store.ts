import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../shared/redux";

export const extraArgument = {};

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: { extraArgument } }),
});
