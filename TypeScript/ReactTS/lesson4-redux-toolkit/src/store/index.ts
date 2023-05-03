import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer:{
        todos:todoSlice
    }
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type  AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
