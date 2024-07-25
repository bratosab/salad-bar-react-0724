import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainSlice";
import { saladReducer } from "./saladSlice";

export const store = configureStore({
    reducer: { main: mainReducer, salad: saladReducer }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>