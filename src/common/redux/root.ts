import { combineReducers } from "redux";

//reducers
import CharacterSlice from "./Character.slice";

const rootReducer = combineReducers({
  CharacterSlice
});

export default rootReducer;
