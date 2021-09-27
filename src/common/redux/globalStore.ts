import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import State from "./state";

interface storeState {
  view: string;
}
const defaultState = (): storeState => {
  return {
    view: "home",
  };
};

const GlobalSlice = createSlice({
  name: "global",
  initialState: defaultState(),
  reducers: {
    UPDATE_VIEW: (state, { payload }: PayloadAction<string>) => {
      state.view = payload;
    }
  },
});

export const view = (state: State) => state.GlobalState.view;

export const ACTIONS = GlobalSlice.actions;
export default GlobalSlice.reducer;
