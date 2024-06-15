import { configureStore } from "@reduxjs/toolkit";
/* import authUser from "./feauter/authUser"; */
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartSlice from "../feauter/cartSlice";

export const store = configureStore({
    reducer: {
        cartSlice
    }
})


export type AppDispatch = typeof store.dispatch
export type RooteState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RooteState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
