import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppState } from "./redux.d";
import { store } from "../app/store";

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
