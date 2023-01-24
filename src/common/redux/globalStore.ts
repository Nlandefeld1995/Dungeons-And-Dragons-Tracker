import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import State from "./state";

interface storeState {
}
const initialState = 
{};

const GlobalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
   
  },
});


export const ACTIONS = GlobalSlice.actions;
export default GlobalSlice.reducer;
