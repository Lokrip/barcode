import type { ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import type { extraArgument, store } from "../app/store";

export type AppState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<
    R,
    AppState,
    typeof extraArgument,
    UnknownAction
>;
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppState;
    dispatch: AppDispatch;
    extra: typeof extraArgument;
}>;
export type ExtraArgument = typeof extraArgument;
