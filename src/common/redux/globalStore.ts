import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { View } from "../interfaces/View";
import State from "./state";

interface storeState {
  view: View;
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
    UPDATE_VIEW: (state, { payload }: PayloadAction<View>) => {
      state.view = payload;
      if(payload === 'home'){
        state = defaultState()
      }
    }
  },
});

export const StoreView = (state: State) => state.GlobalState.view;

export const ACTIONS = GlobalSlice.actions;
export default GlobalSlice.reducer;
