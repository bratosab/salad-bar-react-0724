import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Topping } from "../models/Topping.model";
import { getToppings } from "../services/saladService";

export interface SaladState {
  toppings: Topping[];
  chosenToppings: Topping[];
  base?: string;
  dressing?: string;
  loading: boolean;
}

const initialState: SaladState = {
  toppings: [],
  chosenToppings: [],
  loading: false,
};

export const loadToppings = createAsyncThunk("salad/loadToppings", async () => {
  const toppings = await getToppings();

  return { toppings };
});

const saladSlice = createSlice({
  initialState,
  name: "salad",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadToppings.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadToppings.fulfilled, (state, action) => {
        state.toppings = action.payload.toppings;
        state.loading = false;
      })
      .addCase(loadToppings.rejected, (state) => {
        console.error("it didn't work, we dont have toppings for your salad.");
        state.loading = false;
      });
  },
});

export const saladReducer = saladSlice.reducer;
