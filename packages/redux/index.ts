export { ReduxProvider } from  "./src/app/provider";
export { store, extraArgument } from  "./src/app/store";

export {
    useAppDispath,
    useAppStore,
    useAppSelector
} from "./src/shared/hooks";
export { rootReducer, createSlice } from "./src/shared/redux";
export type {
    AppDispatch,
    AppState,
    AppThunk,
    ExtraArgument,
    createAppAsyncThunk
} from "./src/shared/redux.d";
