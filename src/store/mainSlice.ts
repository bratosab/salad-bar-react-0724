import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainState {
  name: string;
  orderId: number;
  statut: Statut;
}

export enum Statut {
  New = "New",
  OnGoing = "OnGoing",
  Preparing = "Preparing",
  Ready = "Ready",
  Done = "Done",
}

const initialState: MainState = {
  name: "",
  orderId: 0,
  statut: Statut.New,
};

const mainSlice = createSlice({
  initialState,
  name: "main",
  reducers: {
    setName: (state, action: PayloadAction<Pick<MainState, "name">>) => {
      state.name = action.payload.name;
    },
    setOrderId: (state, action: PayloadAction<Pick<MainState, "orderId">>) => {
      state.orderId = action.payload.orderId;
    },
    setStatut: (state, action: PayloadAction<Pick<MainState, "statut">>) => {
      state.statut = action.payload.statut;
    },
  },
});

export const { setName, setOrderId, setStatut } = mainSlice.actions
export const mainReducer = mainSlice.reducer